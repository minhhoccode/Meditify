import MdPost from "../../components/Medium-Post/Md-post";
// import Post from "../../components/posts/Post";
import SideBar from "../../components/sidebar/sideBar";
import "./home.scss";
import {useState, useEffect} from "react";
import axios from "axios";
import {useLocation} from "react-router";


export default function home() {
  const [Post, setPost] = useState([]);
  const { search } = useLocation();


  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:5000/api/post" + search);
      setPost(res.data);
    }
    fetchPosts();
  },[search]);



  return (
    <>
      <div className="home">
        <div className="HomeBorder">
          <MdPost />
        </div>
          {/* <Post /> */}
        <div className="sidebarBorder">
        {/* <SideBar /> */}
        </div>
      </div>
    </>
  );
}
