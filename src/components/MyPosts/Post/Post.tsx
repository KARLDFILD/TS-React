import React from "react";
import classes from "./Post.module.css";

const Post = (props: { message: string; LikeCounter: number; id: number }) => {
  return (
    <div className={classes.item}>
      {props.message}, Likes:{props.LikeCounter}
    </div>
  );
};

export default Post;
