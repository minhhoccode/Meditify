import "./sideBar.scss";
import Cards from "./cards";
import data from "../../../data.json";
import axios from "axios";
import { useState, useEffect } from "react";

export default function SideBar() {
  const Blog = data.Blog;
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("api/category");
      setCats(res.data);
    };
    getCats();
  }, []);
  const tags = cats.map((tag: any) => {
    // const tags = tagss.map((tag: any) => {
    return (
      <a href={"/../../?cat=" + tag.name} id="SidebarTags" key={tag.name}>
        <span key={tag.name} className="Md-card-badge card-badge-blue">
          {tag.name}
        </span>
      </a>
    );
  });
  const Thread = ["Love", "Wellness", "Health"];
  const threads = Thread.map((tag: any) => {
    return (
      <a href={tag.name} key={tag.name} id="SidebarTags">
        <span key={tag.name} className="Md-card-badge card-badge-blue">
          {tag.name}
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
