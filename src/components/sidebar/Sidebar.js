import { Avatar } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectUser } from "../../features/userSlice";
import RecentItem from "./RecentItem";
import "./Sidebar.css";

const Sidebar = () => {
  const [recentItems, setRecentItems] = useState([
    { text: "react" },
    { text: "next" },
    { text: "vue" },
    { text: "programmer" },
    { text: "developer" },
    { text: "javaScript" },
    { text: "fullStack" },
  ]);

  const renderRecentItems = () => {
    return recentItems.map((item) => (
      <RecentItem key={item.text} text={item.text} />
    ));
  };

  const user = useSelector(selectUser);

  return (
    <div className="sidebar__container">
      {/* profile info wrapper */}
      <div className="sidebar__wrapper">
        <div className="sidebar__top">
          <div className="profile__info">
            <div className="profile__background">
              <img
                src="https://images.unsplash.com/photo-1512389098783-66b81f86e199?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1214&q=80"
                alt="background of user profile"
              />
              <Avatar
                className="profile__avatar"
                src={user ? user.photoURL : ""}
              >
                {user ? user.displayName[0] : ""}
              </Avatar>
            </div>
            <div className="profile__info-name">
              <h3 className="profile__fullName">
                {" "}
                {user ? user.displayName : ""}
              </h3>
              <p className="profile__email">{user ? user.email : ""} </p>
            </div>
          </div>
          <div className="sidebar__stats-wrapper">
            <div className="sidebar__stats">
              <p>Who viewed your profile </p>
              <span>2,893</span>
            </div>
            <div className="sidebar__stats">
              <p> Viewed of your posts </p>
              <span>3,780</span>
            </div>
          </div>
        </div>

        <div className="sidebar__bottom">
          <h3>Recent</h3>
          {renderRecentItems()}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
