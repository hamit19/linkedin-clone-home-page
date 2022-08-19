import React, { useEffect, useState } from "react";
import postsServices from "../../services/posts.services";
import { serverTimestamp } from "firebase/firestore/lite";
import { useSelector } from "react-redux/es/hooks/useSelector";
import FlipMove from "react-flip-move";

import EditIcon from "@material-ui/icons/Edit";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";

import "./Feed.css";
import InputOption from "../inputOtion/InputOption";
import Post from "../post/Post";
import { selectUser } from "../../features/userSlice";

const Feed = () => {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  const user = useSelector(selectUser);

  useEffect(() => {
    getAllPosts();
  }, [posts.length]);

  const getAllPosts = async () => {
    const data = await postsServices.getAllPosts();

    setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const renderPosts = () => {
    if (posts.length <= 0) {
      return (
        <h3
          style={{
            position: "absolute",
            top: "5rem",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          Loading...
        </h3>
      );
    } else {
      return posts.map((post) => (
        <Post
          key={post.id}
          name={post.name}
          description={post.description}
          imageUrl={post.photoUrl}
          message={post.message}
        />
      ));
    }
  };

  const addNewPost = async (e) => {
    e.preventDefault();

    const newPost = {
      name: user.displayName,
      description: user.email,
      photoUrl: user.photoURL || "",
      message: input,
      tiemestamp: serverTimestamp(),
    };

    try {
      await postsServices.addPost(newPost);
      getAllPosts();
      setInput("");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="feed__wrapper">
      {/* create post! */}
      <div className="formOptions-wrapper">
        <div className="form-wrapper">
          <EditIcon className="edit-icon" />
          <form onSubmit={addNewPost}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="submit-btn" type="submit">
              send
            </button>
          </form>
        </div>
        <div className="option-btn">
          <InputOption Icon={ImageIcon} color={"#70b5f9"} title={"Photo"} />
          <InputOption
            Icon={SubscriptionsIcon}
            color={"#e7a33e"}
            title={"Video"}
          />
          <InputOption Icon={EventNoteIcon} color={"#c0cbcd"} title={"Event"} />
          <InputOption
            Icon={CalendarViewDayIcon}
            color={"#7fc15e"}
            title={"White article"}
          />
        </div>
      </div>
      {/* posts */}
      <FlipMove className="posts__wrapper">{renderPosts()}</FlipMove>
    </div>
  );
};

export default Feed;
