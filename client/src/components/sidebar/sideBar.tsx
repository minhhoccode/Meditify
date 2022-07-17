import "./sideBar.scss";
import Cards from "./cards";
import data from "../../../data.json";

export default function SideBar() {
  const Blog = data.Blog;

  const tagss = [
    "Love",
    "Wellness",
    "Health",
    "Food",
    "Travel",
  ];
  const tags = tagss.map((tag: any) => {
    return (
      <a href={tag} id="SidebarTags">
        <span key={tag} className="Md-card-badge card-badge-blue">
          {tag}
        </span>
      </a>
    );
  });
  const Thread = ["Love", "Wellness", "Health"];
  const threads = Thread.map((tag: any) => {
    return (
      <a href={tag} key={tag} id="SidebarTags">
        <span key={tag} className="Md-card-badge card-badge-blue">
          {tag}
        </span>
      </a>
    );
  });
  return (
    <>
      <div className="SideBar">
        <div className="sidebarItem">
          <h3 className="TopHead">Recommended topics</h3>
          <div className="SB-Mg">{tags}</div>
          <div className="border"></div>
          <h3 className="TopHead">⚫ Top read in day</h3>
          {Blog.map((post: any) => {
            return (
              <Cards
                key={post._id}
                title={post.title}
                img={post.image}
                author={post.author}
                date={post.date}
              />
            );
          })}
          <a href="TopRead" className="DownHead">
            See the full list
          </a>
          <div className="border"></div>
          <h3 className="TopHead">⚫ Top Comment in day</h3>
          {Blog.map((post: any) => {
            return (
              <Cards
                key={post._id}
                title={post.title}
                img={post.image}
                author={post.author}
                date={post.date}
              />
            );
          })}
          <a href="TopRead" className="DownHead">
            See the full list
          </a>
          <div className="border"></div>
          <h3 className="TopHead">⚫ Top like in day </h3>
          {Blog.map((post: any) => {
            return (
              <Cards
                key={post._id}
                title={post.title}
                img={post.image}
                author={post.author}
                date={post.date}
              />
            );
          })}
          <a href="TopRead" className="DownHead">
            See the full list
          </a>
        </div>
      </div>
    </>
  );
}
