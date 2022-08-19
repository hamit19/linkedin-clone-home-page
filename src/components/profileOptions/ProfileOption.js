import React from "react";
import "./ProfileOption.css";

const ProfileOption = ({ Icon, color, title, onClick }) => {
  return (
    <div onClick={onClick} className="action-btn">
      {Icon && <Icon style={{ color: color, fontSize: "18px" }} />}
      <h4>{title}</h4>
    </div>
  );
};

export default ProfileOption;
