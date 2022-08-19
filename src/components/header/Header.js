import React, { useState } from "react";
import "./Header.css";

import { useDispatch } from "react-redux/es/hooks/useDispatch";
import SearchIcon from "@material-ui/icons/Search";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import HeaderOption from "../headerOption/HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import GroupIcon from "@material-ui/icons/Group";
import WorkIcon from "@material-ui/icons/Work";
import MessageIcon from "@material-ui/icons/Message";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ProfileOption from "../profileOptions/ProfileOption";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { auth } from "../../firebase/FirebaseConfig";
import { logout } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [showOption, setShowOption] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onClickHandler = (e) => {
    e.stopPropagation();
    setShowOption(!showOption);
  };

  const logoutUser = () => {
    auth.signOut();
    dispatch(logout());
    navigate("/login");
  };

  return (
    <header
      className="header"
      onClick={() => {
        setShowOption(false);
      }}
    >
      <nav className="navbar">
        {/* left navbar */}

        <div className="left__navbar">
          {/* linkedin logo */}
          <LinkedInIcon style={{ color: "#0A66C2", fontSize: "2.5rem" }} />

          {/* searchBox */}
          <div className="search-box">
            <SearchIcon className="search-icon" />
            <input type="text" placeholder="Search..." />
          </div>
        </div>

        {/* right navbar */}
        <div className="right__navbar">
          <HeaderOption Icon={HomeIcon} title="Home" />
          <HeaderOption Icon={GroupIcon} title="My network" />
          <HeaderOption Icon={WorkIcon} title="Jobs" />
          <HeaderOption Icon={MessageIcon} title="Messaging" />
          <HeaderOption Icon={NotificationsIcon} title="Notifications" />
          <HeaderOption avatar={true} title="me" onClick={onClickHandler} />
          {showOption && (
            <div className="profileOption__wrapper">
              <ProfileOption
                Icon={ExitToAppIcon}
                color="gray"
                title="Log out"
                onClick={logoutUser}
              />
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
