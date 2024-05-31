import classes from "./MyPosts.module.css";
import SendBTN from "../SendBTN/SendBTN";
import Post from "./Post/Post";
import React, { useRef } from "react";

export interface Props {
  id: number;
  message: string;
  LikeCounter: number;
}

const MyPosts = (props: {
  PostData: Props[];
  addPost: (postMessage: string) => void;
  updateNewPostText: (newPostText: string) => void;
  newPostMessage: string;
}) => {
  let postsElements = props.PostData.map((posts: Props) => (
    <Post
      message={posts.message}
      LikeCounter={posts.LikeCounter}
      id={posts.id}
    />
  ));

  const newPostElement = useRef<HTMLTextAreaElement | null>(null);

  let addPost = () => {
    let postMessage = newPostElement.current?.value;
    if (postMessage !== undefined) {
      props.addPost(postMessage);
      props.updateNewPostText("");
    } else {
      console.error("Text is undefined");
    }
  };

  let onPostChange = () => {
    let newPostText = newPostElement.current?.value;
    if (newPostText !== undefined) {
      props.updateNewPostText(newPostText);
    } else {
      console.error("Text is undefined");
    }
  };

  return (
    <div className={classes.post_content}>
      Posts
      <textarea
        ref={newPostElement}
        onChange={onPostChange}
        className={classes.PostInput}
        value={props.newPostMessage}
      />
      <div className={classes.btnPlace}>
        {/* <SendBTN /> */}
        <button onClick={addPost}>Add Post</button>
      </div>
      {postsElements}
    </div>
  );
};

export default MyPosts;
