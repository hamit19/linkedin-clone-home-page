import React from "react";
import "./Sidebar.css";

const RecentItem = ({ text }) => {
  return (
    <div className="sidebar__recent">
      <span>#</span>
      <p> {text} </p>
    </div>
  );
};

export default RecentItem;
