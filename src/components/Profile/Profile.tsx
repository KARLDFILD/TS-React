import classes from "./Profile.module.css";
import MyPosts from "../MyPosts/MyPosts";
import ProfileInfo from "./ProdileInfo/Profile";
import { PostProps } from "../../redux/state";

const Profile = (props: {
  PostData: PostProps[];
  addPost: (postMessage: string) => void;
  updateNewPostText: (newPostText: string) => void;
  newPostMessage: string;
}) => {
  return (
    <div className={classes.profile_content}>
      <div>
        <ProfileInfo />
      </div>
      <div>
        <MyPosts
          PostData={props.PostData}
          addPost={props.addPost}
          newPostMessage={props.newPostMessage}
          updateNewPostText={props.updateNewPostText}
        />
      </div>
    </div>
  );
};

export default Profile;
