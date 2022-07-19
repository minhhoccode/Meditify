import "./write.scss";
import Editor from "../../components/editor/editor";
import { useState, useRef, useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Slider from "@material-ui/core/Slider";

export default function Write() {
  var theme: string = "bubble";
  var first: boolean = true;
  const [images, setImages] = useState([]);
  const scrollTo = (ref: any) => {
    if (ref && ref.current /* + other conditions */) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const user = useSelector((state: any) => state.user);
  const EditorRef = useRef<any>(null);
  var title: string, content: string;
  useLayoutEffect(() => {
    if (EditorRef.current !== null) {
      content = EditorRef.current.state.text2;
      title = EditorRef.current.state.name;
    }
  }, []);

  const [selectedImage, setSelectedImage] = useState();
  const imageChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const removeSelectedImage = () => {
    setSelectedImage(undefined);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title: title,
      desc: "",
      photo: "",
      content: content,
    };
    if (images.length > 0) {
      const data = new FormData();
      const filename = Date.now() + "";
      data.append("name", filename);
      data.append("file", images[0]);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) { }
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) { }
  };
  const state = {
    img: "",
  };
  const [fit, setFit] = useState('');
  var objPos: string = "center 0%";
  return (
    <div className="write" style={selectedImage ? { marginTop: "60px" } : { marginTop: "150px" }}>
      <form action="" className="writeForm">
        <input type="file" name="user[image]"
          accept="image/*"
          onChange={imageChange}
          id="cover-img"
          style={{ display: "none" }}
        />

        {selectedImage && (
          <div>
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Thumb"
              style={{ objectPosition: fit }}
              className="writeImg"
            />
            <button onClick={removeSelectedImage}>Remove cover</button>
            <br />

          </div>

        )}
        {/* <form action="" className="writeForm"> */}

        <div className="writeFormGroup">

          {/* <textarea
              placeholder="write something..."
              className="writeTextarea"
            ></textarea> */}
          {selectedImage && (
            <Slider
              defaultValue={0}
              onChange={(e, val) => {
                objPos = "center " + val + "%";
                setFit(objPos);
              }}
              aria-label="Small"
              valueLabelDisplay="auto"
            />)
          }
          {!selectedImage && (
            <label htmlFor="cover-img">
              <i className="fa-solid fa-image"></i>
              Add Cover
            </label>
          )}


          <Editor theme={theme} ref={EditorRef} />
          {/* <EditorNotion /> */}
          {/* <Editor
              editorState={editorState}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              onEditorStateChange={this.onEditorStateChange}
            />; */}

        </div>
        <button className="writeSubmit" onSubmit={handleSubmit}>
          Publish
        </button>
      </form>
    </div >
  );
}
