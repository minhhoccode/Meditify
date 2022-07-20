import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Editor } from "primereact/editor";
import Slider from "@material-ui/core/Slider";

// import { Context } from "../../context/Context";
import "./singlePost.scss";
export default function single() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState<any>({});
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [coverphoto, setCoverphoto] = useState<any>({});
  const [updateMode, setUpdateMode] = useState(false);

  const user = useSelector((state: any) => state.user);

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/post/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) { }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/api/post/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false)
    } catch (err) { }
  };

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/api/post/" + path);
      setPost(res.data.post);
      setTitle(res.data.post.title);
      setDesc(res.data.post.content);
      setCoverphoto(res.data.CoverPhoto);
    };

    getPost();
  }, [path]);

  return (
    <>
      <div className="single-post">
        <img
          src={
            coverphoto
              ? coverphoto.img
                ? coverphoto.img
                : "https://images.unsplash.com/photo-1536250853075-e8504ee040b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              : "https://images.unsplash.com/photo-1536250853075-e8504ee040b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          }
          onError={(e: any) => {
            e.target.src =
              "https://images.unsplash.com/photo-1536250853075-e8504ee040b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
          }}
          // src= "https://images.unsplash.com/photo-1536250853075-e8504ee040b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
          className="blog-img"
          style={{ objectPosition: post.photofit }}
        />
        <div className="single-blog">
          <div className="space-between">
            <p className="single-post-tag">{post.thread}</p>
            {post.username === user?.username && (

              <div className="Icon" >

                <i className="fa fa-pen-to-square"
                  onClick={() => setUpdateMode(true)}
                ></i>
                {" "}
                {" "}
                <i className="fa-solid fa-trash-can"
                  onClick={handleDelete}
                ></i>
              </div>
            )}

          </div>

          {updateMode ? (
            <textarea
              id="title"
              value={title}
              style={{ marginBottom: "0px" }}
              onChange={(e : any) =>{
                e.preventDefault();
                e.target.style.height = "auto";
                e.target.style.height = (e.target.scrollHeight)+"px" ;
                setTitle(e.target.value)
              }
                // set style of this element to .style.height = 100%
              } 
              placeholder="Title"
              className="single-post-title writeInput " />
          ) :
            <h1 className="single-post-title">{title}</h1>
          }
          {/* <span className="single-post-des">Thất tình à?. Vào đây.</span> */}
          <div className="single-post-info">
            <span className="single-post-author">
              Author:{" "}
              <Link to={"../../?user=" + post.username}>
                <b>{post.username}</b>
              </Link>
            </span>
            <span className="single-post-date">
              Upload at: <b> {new Date(post.createdAt).toDateString()}</b>
            </span>
          </div>
          
          {updateMode ? (
            <Editor
              value={desc}
              onTextChange={(e: any) => {
                setDesc( e.htmlValue)
              }

              }
              style={{ height: "200px" }}
              className="BlogStyle CustomEditor"
            />
          ) : (
          <section
            className="BlogStyle CustomEditor"
            dangerouslySetInnerHTML={{ __html: desc }}
          ></section>
          )}
          <div className="single-post-content"></div>
        </div>
      </div>
    </>
  );
}
