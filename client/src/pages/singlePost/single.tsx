import React, { Component } from "react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
// import { Context } from "../../context/Context";
import "./singlePost.scss";
export default function single() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("api/post/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.content);
      // console.log(res.data);
    };
    getPost();
  }, [path]);

  return (
      <>
        <div className="single-post">
          <img
            src="https://images.unsplash.com/photo-1656628228059-29165b22d48f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=886&q=80"
            alt=""
            className="blog-img"
          />
          <div className="single-blog">
            <p className="single-post-tag">Chuyện trò - tâm sự</p>
            
            
            <h1 className="single-post-title">
             {title}
            </h1>
            {/* <span className="single-post-des">Thất tình à?. Vào đây.</span> */}
            <div className="single-post-info">
              <span className="single-post-author">
                Author: <a href={"../../user/" + post.username}><b>{post.username}</b></a>
              </span>
              <span className="single-post-date">
                Upload at: <b> {new Date(post.createdAt).toDateString()}</b>
              </span>
            </div>
            <i className="fa-solid fa-pen-to-square"></i>
            <section className="BlogStyle" dangerouslySetInnerHTML={{ __html: desc }}></section>
            <div className="single-post-content">
            </div>


          </div>
        </div>
      </>
    );
  }
