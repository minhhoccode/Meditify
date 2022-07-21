import React, { Component } from 'react'
import { render } from "react-dom";
import ReactQuill, { Quill } from "react-quill";

import "../../components/editor/editor.scss";
const CustomToolbar = () => (
    <div id="toolbar">
        <select className="ql-font">
            <option value="arial" selected>
                Arial
            </option>
            <option value="comic-sans">Comic Sans</option>
            <option value="courier-new">Courier New</option>
            <option value="georgia">Georgia</option>
            <option value="helvetica">Helvetica</option>
            <option value="lucida">Lucida</option>
        </select>
        <select className="ql-size">
            <option value="extra-small">Size 1</option>
            <option value="small">Size 2</option>
            <option value="medium" selected>
                Size 3
            </option>
            <option value="large">Size 4</option>
        </select>
        <select className="ql-align" />
        <select className="ql-color" />
        <select className="ql-background" />
        <button className="ql-clean" />
        <button className="ql-insertHeart">
        </button>
    </div>
);

// Add sizes to whitelist and register them
const Size = Quill.import("formats/size");
Size.whitelist = ["extra-small", "small", "medium", "large"];
Quill.register(Size, true);

// Add fonts to whitelist and register them
const Font = Quill.import("formats/font");
Font.whitelist = [
    "arial",
    "comic-sans",
    "courier-new",
    "georgia",
    "helvetica",
    "lucida"
];
Quill.register(Font, true);


class Editor extends React.Component {
    state = { editorHtml: "" };

    handleChange = (html: any) => {
        this.setState({ editorHtml: html });
    };

    static modules = {
        toolbar: {
            container: "#toolbar",
        }
    };

    static formats = [
        "header",
        "font",
        "size",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
        "color"
    ];

    render() {
        return (
            <div className="text-editor">
                <CustomToolbar />
                <ReactQuill
                    value={this.state.editorHtml}
                    onChange={this.handleChange}
                    modules={Editor.modules}
                    formats={Editor.formats}
                />
                {this.state.editorHtml}
            </div>
        );
    }
}

export default Editor;