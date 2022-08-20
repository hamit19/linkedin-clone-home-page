import React, { useState } from "react";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

import "./Widgets.css";

const Widgets = () => {
  const [articles, setArticles] = useState([
    { heading: "Hamid is back!", subtitle: "Top news 9099 readers" },
    { heading: "Coronavirus: UK updates", subtitle: "Top news 9099 readers" },
    { heading: "War in UK", subtitle: "Top news 9099 readers" },
    { heading: "Metaverse's newest news", subtitle: "Top news 9099 readers" },
    {
      heading: "Facebook has been attacked by hackers",
      subtitle: "Top news 9099 readers",
    },
  ]);

  const renderWidgetsNews = () => {
    return articles.map((article) => (
      <div className="widgets-article" key={article.heading}>
        <div className="widgets-articleLeft">
          <FiberManualRecordIcon className="icon" />
        </div>
        <div className="widgets-articleRight">
          <h4>{article.heading}</h4>
          <span>{article.subtitle}</span>
        </div>
      </div>
    ));
  };

  return (
    <div className="widgets">
      <div className="widgets-wrapper">
        <div className="widgets-header">
          <h2>LinkedIn News</h2>
          <InfoIcon />
        </div>
        {renderWidgetsNews()}
      </div>
    </div>
  );
};

export default Widgets;
