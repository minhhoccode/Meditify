import "./write.scss";
import Editor from "../../components/editor/editor";
import Quill from 'quill';
import { ImageUploadModule } from "quill-right-image-upload";
import { useState } from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import {EditorState} from "draft-js";
import draftjsEditor from "../../components/draftjsEditor/draftjsEditor";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";



export default function Write() {
  var theme: string = "bubble";
  var first: boolean = true;
  Quill.register('modules/imageUpload', ImageUploadModule);
  const [images, setImages] = useState([]);
  const [editorState, setEditorState] = useState('');

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList as never[]);
  };
  return (
    <>
      <div className="write">
        {/* <img
                    src="https://images.unsplash.com/photo-1579294800821-694d95e86143?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
                    alt=""
                    className="writeImg"
                    id="writeImg"
                  /> */}

        <ImageUploading
          value={images}
          onChange={onChange}
          maxNumber={2}
          multiple={false}
          dataURLKey={"data_url"}>

          {({
            imageList,
            onImageUpload,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            // write your building UI
            <div className="upload__image-wrapper" {...dragProps}>



              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <img style={isDragging ? { borderRadius: "30px" } : undefined} src={image['data_url']} alt="" className="writeImg" onClick={() => onImageUpdate(index)} />
                  <div className="image-item__btn-wrapper">
                    <button id="update" style={isDragging ? { color: 'red' } : undefined} onClick={() => onImageUpdate(index)}>Update</button>
                    <button onClick={() => onImageRemove(index)}>Remove</button>
                  </div>
                </div>
              ))}
              <button
                id="upload__image"
                style={{ display: 'none' }}
                onClick={onImageUpload}
              >=))
              </button>
              &nbsp;
            </div>

          )}


        </ImageUploading>
        <select onChange={(e) =>
          theme = e.target.value}>
          <option value="snow">Snow</option>
          <option value="bubble">Bubble</option>
          <option value="core">Core</option>
        </select>
        <form action="" className="writeForm">
          <div className="writeFormGroup" >
            <label htmlFor={first ? "upload__image" : "update"}>
              <i className="fa-solid fa-plus" id="PlusIcon"></i>{" "}
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
            <div
              id="title"
              placeholder="title"
              className="writeInput"
              contentEditable="true"
            />
          </div>
          <div className="writeFormGroup">
            {/* <textarea
              placeholder="write something..."
              className="writeTextarea"
            ></textarea> */}
            <Editor />
            {/* <Editor
              editorState={editorState}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              onEditorStateChange={this.onEditorStateChange}

            />; */}
            {/* <draftjsEditor /> */}
          </div>
          <button className="writeSubmit">Publish</button>
        </form>
      </div>
    </>
  );
}



