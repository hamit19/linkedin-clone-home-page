import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets-wrapper">
        <div className="widgets-header">
          <h2>LinkedIn News</h2>
          <InfoIcon />
        </div>
      </div>
    </div>
  );
};

export default Widgets;
