import React, { useState } from "react";

import "./NavigatioinOptions.css";

import HeaderOption from "../headerOption/HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import GroupIcon from "@material-ui/icons/Group";
import WorkIcon from "@material-ui/icons/Work";
import MessageIcon from "@material-ui/icons/Message";
import NotificationsIcon from "@material-ui/icons/Notifications";

const NavigationOptions = () => {
  return (
    <div className="right__navbar">
      <HeaderOption Icon={HomeIcon} title="Home" />
      <HeaderOption Icon={GroupIcon} title="My network" />
      <HeaderOption Icon={WorkIcon} title="Jobs" />
      <HeaderOption Icon={MessageIcon} title="Messaging" />
      <HeaderOption Icon={NotificationsIcon} title="Notifications" />
    </div>
  );
};

export default NavigationOptions;
