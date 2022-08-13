import React from "react";
import "./Header.css";

import SearchIcon from "@material-ui/icons/Search";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import HeaderOption from "../headerOption/HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import GroupIcon from "@material-ui/icons/Group";
import WorkIcon from "@material-ui/icons/Work";
import MessageIcon from "@material-ui/icons/Message";
import NotificationsIcon from "@material-ui/icons/Notifications";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        {/* left navbar */}

        <div className="left__navbar">
          {/* linkedin logo */}
          <LinkedInIcon style={{ color: "#0A66C2", fontSize: "2.5rem" }} />

          {/* searchBox */}
          <div className="search-box">
            <SearchIcon className="search-icon" />
            <input type="text" />
          </div>
        </div>

        {/* right navbar */}
        <div className="right__navbar">
          <HeaderOption Icon={HomeIcon} title="Home" />
          <HeaderOption Icon={GroupIcon} title="My network" />
          <HeaderOption Icon={WorkIcon} title="Jobs" />
          <HeaderOption Icon={MessageIcon} title="Messaging" />
          <HeaderOption Icon={NotificationsIcon} title="Notifications" />
          <HeaderOption
            avatar={
              "https://avatars.githubusercontent.com/u/96312176?s=400&u=ec0b8500cbd4371868b08d12506ea4594f2ea5ce&v=4"
            }
            title="me"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
