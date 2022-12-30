import React from "react";
import "./css/Sidebar.css";
import { Avatar } from "@mui/material";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__profile">
        <img
          src="https://i.pinimg.com/originals/94/8b/3a/948b3adbbc10f5063257104e1c96b376.jpg"
          alt="sidebarlogo"
        />
        <div className="profile__details">
          <Avatar className="sidebarAvatar" />
          <h4>Somesh Gavali</h4>
          <p>Full Stack Developer</p>
        </div>
        <div className="profile__status">
          <span>Who viewed your profile</span>
          <span className="status__number">20</span>
        </div>
        <div className="profile__status">
          <span>
            Connection <br /> <b>Grow your Network</b>
          </span>
          <span className="status__number">150</span>
        </div>
      </div>

      <div className="sidebar__recent">
        <p>Recent</p>
        <p className="hash">
          <span>#</span>Full Stack Developer
        </p>
        <p className="hash">
          <span>#</span>Front End Developer
        </p>
        <p className="hash">
          <span>#</span>Backend Developer
        </p>
        <p className="hash">
          <span>#</span>React.Js Developer
        </p>
        <p className="hash">
          <span>#</span>UI Developer
        </p>
        <p className="hash">
          <span>#</span>All in One
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
