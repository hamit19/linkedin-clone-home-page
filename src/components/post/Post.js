import React, { useEffect, useRef, useState } from "react";
import InputOption from "../inputOtion/InputOption";

import { Avatar } from "@material-ui/core";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { forwardRef } from "react";
import "./Post.css";
import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux/es/exports";
import ProfileOption from "../profileOptions/ProfileOption";

const Post = forwardRef(
  (
    { name, description, imageUrl, message, userId, id, onDelete, onEdit },
    ref
  ) => {
    const [adminUser, setAdminUser] = useState();
    const [showOptions, setShowOptions] = useState(false);

    const postRef = useRef();

    const onClickHandler = (e) => {
      e.stopPropagation();
      setShowOptions(!showOptions);
    };

    const user = useSelector(selectUser);

    const checkUserAuth = () => {
      setAdminUser(postRef.current.dataset.id);
    };

    useEffect(() => {
      checkUserAuth();
    }, []);

    return (
      <div ref={ref}>
        <div
          className="post-container"
          ref={postRef}
          data-id={userId}
          onClick={() => setShowOptions(false)}
        >
          <div className="post__header">
            <Avatar src={imageUrl}> {name[0]} </Avatar>
            <div className="post__desc">
              <h4>{name}</h4>
              <p>{description}</p>
            </div>
            {user.uid === adminUser && (
              <div className="adminOptions" onClick={onClickHandler}>
                <MoreVertIcon className="adminOptions-icon" />
                {showOptions && (
                  <div className="options-wrapper">
                    <ProfileOption
                      Icon={DeleteIcon}
                      onClick={(e) => onDelete(e, id)}
                      title="Delete"
                    />
                    <ProfileOption
                      Icon={EditIcon}
                      title="Edit"
                      onClick={(e) => onEdit(e, id)}
                    />
                  </div>
                )}
              </div>
            )}
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
            <InputOption
              Icon={ChatOutlinedIcon}
              title="Comment"
              color={"gray"}
            />
            <InputOption
              Icon={ShareOutlinedIcon}
              title="Share"
              color={"gray"}
            />
            <InputOption Icon={SendOutlinedIcon} title="Send" color={"gray"} />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
