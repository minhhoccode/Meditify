import "./write.scss";
import Editor from "../../components/editor/editor";
import { useState } from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";


export default function Write() {
  var theme: string = "bubble";
  var first: boolean = true;
  const [images, setImages] = useState([]);
  const [editorState, setEditorState] = useState("");

  const scrollTo = (ref: any) => {
    if (ref && ref.current /* + other conditions */) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    setImages(imageList as never[]);
  };

  return (
    <>
      <div className="write">
        <div className="ImagePlace">

          <ImageUploading
            value={images}
            onChange={onChange}
            maxNumber={2}
            multiple={false}
            dataURLKey={"data_url"}
          >
            {({
              imageList,
              onImageUpload,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              <div className="upload__image-wrapper" {...dragProps}>
                {imageList.map((image, index) => (
                  <div key={index} className="image-item">
                    <img
                      style={isDragging ? { borderRadius: "30px" } : undefined}
                      src={image["data_url"]}
                      alt=""
                      className="writeImg"
                      onClick={() => onImageUpdate(index)}
                    />
                    <div className="image-item__btn-wrapper">
                      <label htmlFor="upload__image" className="btn-image"><button>Upload</button></label>
                      <button
                        id="update"
                        className="btn-image"
                        style={isDragging ? { color: "red" } : undefined}
                        onClick={() => onImageUpdate(index)}
                      >
                        Update
                      </button>
                      <button className="btn-image" onClick={() => onImageRemove(index)}>Remove</button>
                    </div>
                  </div>
                ))}
                <button
                  id="upload__image"
                  // style={{ display: "none" }}
                  onClick={onImageUpload}
                >Upload</button>
                &nbsp;
              </div>
            )}
          </ImageUploading>
        </div>
        <form action="" className="writeForm">
          <div className="writeFormGroup">

            <input type="file" id="fileInput" style={{ display: "none" }} />
 
          </div>
          <div className="writeFormGroup">
            {/* <textarea
              placeholder="write something..."
              className="writeTextarea"
            ></textarea> */}
            <Editor theme={theme} />
            {/* <EditorNotion /> */}
            {/* <Editor
              editorState={editorState}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              onEditorStateChange={this.onEditorStateChange}
            />; */}
          </div>
          <button className="writeSubmit">Publish</button>
        </form>
      </div>
    </>
  );
}
