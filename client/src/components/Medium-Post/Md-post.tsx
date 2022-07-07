import "./Md-post.scss";
import data from "../../../data.json";
import MdPostItem from "./MdpostItem";
export default function MdPost() {
  const Blog = data.Blog;
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
                        view={item.view}
                        tags={item.tags}
                        image={item.image}
                        author={item.author}
                        date={item.date}
                        likes={item.likes}
                    />
                );
            })}
        </div>
    </div>
  );
}
