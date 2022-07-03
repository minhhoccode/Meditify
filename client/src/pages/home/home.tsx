import Post from "../../components/posts/Post";
import SidebarLeft from "../../components/sidebarLeft/sidebarLeft";
import SideBar from "../../components/sidebar/sideBar";
import "./home.scss";
export default function home() {
  return (
    <>
      <div className="home">
        <SidebarLeft />
        <Post />
        <SideBar />
      </div>
    </>
  );
}
