import "./topBar.scoped.scss";
import { useState, useEffect, useRef } from "react";

// rfc

export default function TopBar(): JSX.Element {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event: any) => {
    var menuu = document.getElementById("menuu");
    if (menuu !== null) {
      if (menuu.style.transform != "translateX(0%)") {
        menuu.style.transform = "translateX(0%)";
      } else {
        menuu.style.transform = "translateX(-100%)";
      }
    }
    var toggleIcon = document.getElementById("menuIcon");
    if (toggleIcon !== null) {
      if (toggleIcon.className != "menuIcon toggle") {
        toggleIcon.className += " toggle";
      } else {
        toggleIcon.className = "menuIcon";
      }
    }
  };

  return (
    <div className="top">
      <nav id="navbar" className="">
        <div className="nav-wrapper">
          <div className="logo">
            <a href="http://localhost:3000/home">
              <i className="fa fa-angellist"></i> MEDITIFY
            </a>
          </div>
          <ul id="menu">
            <li>
              <a href="http://localhost:3000/home">Home</a>
            </li>
            <li>
              <a href="http://localhost:3000/write">write</a>
            </li>
            <li>
              <a href="Logout">Logout</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="topRight">
          <a href="http://localhost:3000/settings">
          <img
          src="https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/279893737_1133317790857101_3263187200603410640_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=GvpI3uWUSDkAX_1BXOv&_nc_ht=scontent.fhan5-9.fna&oh=00_AT9xaBspykRR2JRzf2kDTiBH9RHDquXWrgGM0oNcFDnEzw&oe=62C576CF"
          width="200"
          alt="Profile Image"
          className="topImg"
        />
          </a>
        <i className="topIcon fa fa-search" aria-hidden="true"></i>
      </div>

      <div className="menuIcon" id="menuIcon" onClick={handleClick}>
        <span className="icon icon-bars"></span>
        <span className="icon icon-bars overlay"></span>
      </div>

      <div className="overlay-menu" id="menuu">
        <ul id="menu">
          <li>
            <a href="home">Home</a>
          </li>
          <li>
            <a href="write">write</a>
          </li>
          <li>
            <a href="Logout">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
