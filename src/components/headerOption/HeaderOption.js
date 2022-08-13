import { Avatar } from "@material-ui/core";
import React from "react";
import "./HeaderOption.css";

const HeaderOption = ({ title, Icon, avatar }) => {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <Avatar className="headerOption__avatar" src={avatar} />}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
};

export default HeaderOption;
