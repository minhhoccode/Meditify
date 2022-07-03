import "./post.scss";
import data from "../../../data.json";
import PostItem from "../postItem/postItem";
export default function post() {
  const Blog = data.Blog;
  return (
    <div className="Post">
      <div className="post">
        {Blog.map((post: any) => {
          return (
            <PostItem
              key={post.id}
              title={post.title}
              content={post.content}
              image={post.image}
              tags={post.tags}
              author={post.author}
              date={post.date}
            />
          );
        })}
      </div>
    </div>
  );
}
