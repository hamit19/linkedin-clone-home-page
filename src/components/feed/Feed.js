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
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";

const Feed = () => {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const [editing, setEditing] = useState(false);
  const [oldPost, setOldPost] = useState({});

  const user = useSelector(selectUser);

  const deletePostHandler = async (e, id) => {
    e.stopPropagation();
    try {
      await postsServices.deletePost(id);
      getAllPosts();
    } catch (error) {
      console.log(error);
    }
  };

  const editPostHandler = async (e, id) => {
    e.stopPropagation();
    setEditing(true);

    // finding the post obj
    const post = posts.find((p) => p.id === id);

    setOldPost(post);

    setInput(post.message);
  };

  const updatePostInServer = async () => {
    const editedPost = { ...oldPost, message: input };
    const { id } = editedPost;

    try {
      postsServices.updatePost(id, editedPost).then(() => {
        getAllPosts();
        setEditing(false);
        setInput("");
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getAllPosts = async () => {
    const data = await postsServices.getAllPosts();

    setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getAllPosts();
  }, [posts.length]);

  const renderPosts = () => {
    return posts.map((post) => (
      <Post
        userId={post.userId}
        key={post.id}
        id={post.id}
        name={post.name}
        description={post.description}
        imageUrl={post.photoUrl}
        message={post.message}
        onDelete={deletePostHandler}
        onEdit={editPostHandler}
      />
    ));
  };

  const addNewPost = async (e) => {
    e.preventDefault();

    if (editing) return;

    const newPost = {
      userId: user.uid,
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
              placeholder="Add a new post"
            />
          </form>
          {editing && (
            <button
              className="submit-btn"
              onClick={updatePostInServer}
              type="onClick"
            >
              Edit
            </button>
          )}
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
      {posts.length <= 0 ? (
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LoadingSpinner />
        </div>
      ) : (
        <FlipMove className="posts__wrapper">{renderPosts()}</FlipMove>
      )}
    </div>
  );
};

export default Feed;
