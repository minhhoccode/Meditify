import React from "react";
import "./cards.scss";

export default function cards(props: any) {
  return (
    <>
      <div className="small-card">
        <div className="small-flex">
          <img src={props.author.img} className="image-small" />
          <h5 className="author-name-small">{props.author.name}</h5>
        </div>
        <a href={props.title}>
          <h4 className="title-small">{props.title}</h4>
        </a>
      </div>
    </>
  );
}
