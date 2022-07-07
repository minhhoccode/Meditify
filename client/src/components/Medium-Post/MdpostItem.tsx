import "./MdpostItem.scss";
import React from "react"
export default function MdPostItem(props: any) {
  const tags = props.tags.map((tag: any) => {
    return (
      <a className="tags" key={tag}>
        <span className="Md-card-badge card-badge-blue">
          {tag}
        </span>
      </a>
    );
  });

  return (
    <>
      <div className="MdItemPost">
        <div className="flex">
          <img src={props.author.img} alt="" className="MdItemAuthorImg" />
          <a href={props.author.name}>
            <p className="authorName">{props.author.name}</p>
          </a>
        </div>
        <div className="MdItempost">
          <div className="flex1">
            <a href={'Blog/' + props.author.name + '/' + props.title}>
              <h2 className="MdItemTitle">{props.title}</h2>
            </a>
            <p className="MdItemdesc">{props.content}</p>
          </div>
          <img src={props.image} alt="" className="MdItemCardImg" />
        </div>
        <div className="bottomCat">
          <div className="category">
            <div className="space-between">
              <div>
                {tags}
              </div>
              <div className="MdRightBot" >
                <div id="Uplike">

                  <i className="fa-solid fa-caret-up" id="View"></i>
                  {props.likes}
                  {" "}
                  {" "}
                  {" "}
                  <i className="fa-solid fa-eye" id="View">    </i>
                  {props.view}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
