// @ts-nocheck
import * as React from "react";

export const Editor = React.memo(
  React.forwardRef((props, ref) => {
    const elementRef = React.useRef(null);
    const useUpdateEffect = (fn, deps) => {
      const mounted = React.useRef(false);
      return React.useEffect(() => {
        if (!mounted.current) {
          mounted.current = true;
          return;
        }

        return fn && fn();
      }, deps);
    };
    function findDiffKeys(obj1, obj2) {
      if (!obj1 || !obj2) {
        return {};
      }

      return Object.keys(obj1)
        .filter((key) => !obj2.hasOwnProperty(key))
        .reduce((result, current) => {
          result[current] = obj1[current];
          return result;
        }, {});
    }

    function isExist(element) {
      return (
        element !== null &&
        typeof element !== "undefined" &&
        element.nodeName &&
        element.parentNode
      );
    }
    function classNames(...args) {
      if (args) {
        let classes = [];

        for (let i = 0; i < args.length; i++) {
          let className = args[i];

          if (!className) continue;

          const type = typeof className;

          if (type === "string" || type === "number") {
            classes.push(className);
          } else if (type === "object") {
            const _classes = Array.isArray(className)
              ? className
              : Object.entries(className).map(([key, value]) =>
                  !!value ? key : null
                );

            classes = _classes.length
              ? classes.concat(_classes.filter((c) => !!c))
              : classes;
          }
        }

        return classes.join(" ");
      }

      return undefined;
    }

    const contentRef = React.useRef(null);
    const toolbarRef = React.useRef(null);
    const quill = React.useRef(null);
    const isQuillLoaded = React.useRef(false);

    React.useEffect(() => {
      if (!isQuillLoaded.current) {
        // @ts-ignore
        import("quill")
          .then((module) => {
            if (module && isExist(contentRef.current)) {
              const configuration = {
                modules: {
                  // @ts-ignore
                  toolbar: props.showHeader ? toolbarRef.current : false,
                  // @ts-ignore
                  ...props.modules,
                },
                // @ts-ignore
                placeholder: props.placeholder,
                // @ts-ignore
                readOnly: props.readOnly,
                // @ts-ignore
                theme: props.theme,
                // @ts-ignore
                formats: props.formats,
                scrollingContainer : "html",
              };

              if (module.default) {
                // webpack
                // @ts-ignore
                quill.current = new module.default(
                  contentRef.current,
                  configuration
                );
              } else {
                // parceljs
                // @ts-ignore
                quill.current = new module(contentRef.current, configuration);
              }

              // @ts-ignore
              if (props.value) {
                // @ts-ignore
                quill.current.setContents(
                  quill.current.clipboard.convert(props.value)
                );
              }

              // @ts-ignore
              quill.current.on("text-change", (delta, source) => {
                // @ts-ignore
                let firstChild = contentRef.current.children[0];
                let html = firstChild ? firstChild.innerHTML : null;
                // @ts-ignore
                let text = quill.current.getText();
                if (html === "<p><br></p>") {
                  html = null;
                }

                // @ts-ignore
                if (props.onTextChange) {
                  // @ts-ignore
                  props.onTextChange({
                    htmlValue: html,
                    textValue: text,
                    delta: delta,
                    source: source,
                  });
                }
              });

              // @ts-ignore
              quill.current.on(
                "selection-change",
                (range, oldRange, source) => {
                  // @ts-ignore
                  if (props.onSelectionChange) {
                    // @ts-ignore
                    props.onSelectionChange({
                      range: range,
                      oldRange: oldRange,
                      source: source,
                    });
                  }
                }
              );
            }
          })
          .then(() => {
            // @ts-ignore
            if (quill.current && quill.current.getModule("toolbar")) {
              // @ts-ignore
              props.onLoad && props.onLoad(quill.current);
            }
          });

        isQuillLoaded.current = true;
      }
    }, []);

    useUpdateEffect(() => {
      // @ts-ignore
      if (quill.current && !quill.current.hasFocus()) {
        // @ts-ignore
        props.value
          ? // @ts-ignore
            quill.current.setContents(
              quill.current.clipboard.convert(props.value)
            )
          : // @ts-ignore
            quill.current.setText("");
      }
      // @ts-ignore
    }, [props.value]);

    React.useImperativeHandle(ref, () => ({
      getQuill: () => quill.current,
      getElement: () => elementRef.current,
      getContent: () => contentRef.current,
      getToolbar: () => toolbarRef.current,
      ...props,
    }));

    const createToolbarHeader = () => {
      // @ts-ignore
      if (props.showHeader === false) {
        return null;
      }
      // @ts-ignore
      else if (props.headerTemplate) {
        return (
          <div ref={toolbarRef} className="p-editor-toolbar">
            {
              // @ts-ignore
              props.headerTemplate
            }
          </div>
        );
      } else {
        return (
          <div ref={toolbarRef} className="p-editor-toolbar">
            <span className="ql-formats">
              <select className="ql-header" defaultValue="0">
                <option value="1">Heading</option>
                <option value="2">Subheading</option>
                <option value="0">Normal</option>
              </select>
              <select className="ql-font">
                <option></option>
                <option value="serif"></option>
                <option value="monospace"></option>
              </select>
            </span>
            <span className="ql-formats">
              <button
                type="button"
                className="ql-bold"
                aria-label="Bold"
              ></button>
              <button
                type="button"
                className="ql-italic"
                aria-label="Italic"
              ></button>
              <button
                type="button"
                className="ql-underline"
                aria-label="Underline"
              ></button>
            </span>
            <span className="ql-formats">
              <select className="ql-color"></select>
              <select className="ql-background"></select>
            </span>
            <span className="ql-formats">
              <button
                type="button"
                className="ql-list"
                value="ordered"
                aria-label="Ordered List"
              ></button>
              <button
                type="button"
                className="ql-list"
                value="bullet"
                aria-label="Unordered List"
              ></button>
              <select className="ql-align">
                <option
                  // @ts-ignore
                  defaultValue
                ></option>
                <option value="center"></option>
                <option value="right"></option>
                <option value="justify"></option>
              </select>
            </span>
            <span className="ql-formats">
              <button
                type="button"
                className="ql-link"
                aria-label="Insert Link"
              ></button>
              <button
                type="button"
                className="ql-image"
                aria-label="Insert Image"
              ></button>
              <button
                type="button"
                className="ql-code-block"
                aria-label="Insert Code Block"
              ></button>
            </span>
            <span className="ql-formats">
              <button
                type="button"
                className="ql-clean"
                aria-label="Remove Styles"
              ></button>
            </span>
          </div>
        );
      }
    };

    // @ts-ignore
    const otherProps = findDiffKeys(props, Editor.defaultProps);
    // @ts-ignore
    const className = classNames(
      "p-component p-editor-container",
      props.className
    );
    const header = createToolbarHeader();
    // @ts-ignore
    const content = (
      <div
        ref={contentRef}
        className="p-editor-content"
        style={props.style}
      ></div>
    );

    return (
      <div
        id={
          // @ts-ignore
          props.id
        }
        ref={elementRef}
        className={className}
        {...otherProps}
      >
        {header}
        {content}
      </div>
    );
  })
);

Editor.displayName = "Editor";
// @ts-ignore
Editor.defaultProps = {
  __TYPE: "Editor",
  id: null,
  value: null,
  style: null,
  className: null,
  placeholder: null,
  readOnly: false,
  modules: null,
  formats: null,
  theme: "snow",
  showHeader: true,
  headerTemplate: null,
  onTextChange: null,
  onSelectionChange: null,
  onLoad: null,
};
