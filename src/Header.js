import React from "react";
import "./css/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";

import Headeroptions from "./Headeroptions";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <div className="header__logo">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
            alt="logo"
          />
        </div>
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header__right">
        <Headeroptions Icon={HomeIcon} title="Home" />
        <Headeroptions Icon={PeopleIcon} title="My Network" />
        <Headeroptions Icon={WorkIcon} title="Jobs" />
        <Headeroptions Icon={MessageIcon} title="Messages" />
        <Headeroptions Icon={NotificationsIcon} title="Notification" />
        <Headeroptions avatar={Avatar} title="Somesh Gavali" />
      </div>
    </div>
  );
}

export default Header;
