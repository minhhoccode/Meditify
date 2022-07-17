import "./Md-post.scss";
import MdPostItem from "./MdpostItem";
import data from "../../../data.json";
export default function MdPost(props: any) {

const Blog = props.props;
// const Blog = data.Blog;

  return (
    <div className="MdPost">
        <div className="md-post-container">
            {Blog.map((item: any) => {
                return (
                    <MdPostItem
                    key={item._id}
                    id={item._id}
                    title={item.title}
                    content={item.content}
                    view={item.views}
                    tags={item.tags}
                    image={item.photo}
                    author={item.username}
                    date={item.date}
                    likes={item.likes}
                    />
                );
            })}
        </div>
    </div>
  );
}
