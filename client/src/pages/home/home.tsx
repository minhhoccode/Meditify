import MdPost from "../../components/Medium-Post/Md-post";
// import Post from "../../components/posts/Post";
import SideBar from "../../components/sidebar/sideBar";
import "./home.scss";
export default function home() {
  return (
    <>
      <div className="home">
        <div className="HomeBorder">
          <MdPost />
        </div>
          {/* <Post /> */}
        <div className="sidebarBorder">
        <SideBar />
        </div>
      </div>
    </>
  );
}
