import "./MdpostItem.scss";
import { Link } from "react-router-dom";
export default function MdPostItem(props: any) {
  const tags = props.tags.map((tag: any) => {
    return (
      <a className="tags" key={tag}>
        <span className="Md-card-badge card-badge-blue">{tag}</span>
      </a>
    );
  });

  return (
    <>
      <div className="MdItemPost">
        <div className="flex">
          {/* <img src={props.author.img} alt="" className="MdItemAuthorImg" /> */}
          <a href={props.author}>
            <p className="authorName">{props.author}</p>
          </a>
        </div>
        <div className="MdItempost">
          <div className="flex1">
            <Link to={`/post/${props.id}`}>
              <h2 className="MdItemTitle">{props.title}</h2>
            </Link>
            <p className="MdItemdesc">
              {props.content
                .slice(0, 500)
                .replace(/<[^>]+>/g, " ")
                .replace(/&lt;/g, "<")
                .replace(/&gt;/g, ">") + "..."}
            </p>
          </div>
          <img
            src={
              props.image
                ? props.image
                : "https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJvb2t8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60"
            }
            alt=""
            className="MdItemCardImg"
            onError={
              (e: any) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJvb2t8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60";
              }
            }
          />
        </div>
        <div className="bottomCat">
          <div className="category">
            <div className="space-between">
              <div>{tags}</div>
              <div className="MdRightBot">
                <div id="Uplike">
                  <i className="fa-solid fa-caret-up" id="View"></i>
                  {props.likes}{" "}
                  <i className="fa-solid fa-eye" id="View">
                    {" "}
                  </i>
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
