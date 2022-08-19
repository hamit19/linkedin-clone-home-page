import React from "react";
import InputOption from "../inputOtion/InputOption";

import { Avatar } from "@material-ui/core";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import { forwardRef } from "react";
import "./Post.css";

const Post = forwardRef(({ name, description, imageUrl, message }, ref) => {
  return (
    <div ref={ref} className="post-container">
      <div className="post__header">
        <Avatar src={imageUrl}> {name[0]} </Avatar>
        <div className="post__desc">
          <h4>{name}</h4>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__message">
        <p>{message}</p>
      </div>
      <div className="post__actions">
        <InputOption
          Icon={ThumbUpAltOutlinedIcon}
          title="Like"
          color={"gray"}
        />
        <InputOption Icon={ChatOutlinedIcon} title="Comment" color={"gray"} />
        <InputOption Icon={ShareOutlinedIcon} title="Share" color={"gray"} />
        <InputOption Icon={SendOutlinedIcon} title="Send" color={"gray"} />
      </div>
    </div>
  );
});

export default Post;
