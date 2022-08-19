import { Avatar } from "@material-ui/core";
import React from "react";
import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";

import "./HeaderOption.css";

const HeaderOption = ({ title, Icon, avatar, onClick }) => {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar className="headerOption__avatar" src={user && user.photoURL}>
          {user && user.displayName[0]}
        </Avatar>
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
};

export default HeaderOption;
