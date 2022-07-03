import React from "react";
import "./sideBar.scss";

export default function cards(props: any) {
  return (
    <>
      <div className="small-card">
        <div className="small-flex">
          <img src={props.img} className="image-small" />
          <p className="author-name-small">{props.author.name}</p>
        </div>
        <a href={props.url}>
          <h1 className="title-small">{props.title}</h1>
        </a>
      </div>
    </>
  );
}
