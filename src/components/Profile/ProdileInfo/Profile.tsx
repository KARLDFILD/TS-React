import React from "react";
import classes from "../Profile.module.css";

const ProfileInfo = () => {
  return (
    <div className={classes.profile_content}>
      <div>
        <img
          className={classes.Shapka}
          src="https://youvteme.online/wp-content/uploads/2023/02/%D0%9D%D0%BE%D0%B2%D1%8B%D0%B5-%D0%BF%D1%80%D0%BE%D0%BC%D0%BE%D0%BA%D0%BE%D0%B4%D1%8B-%D0%9A%D0%BE%D0%B4%D1%8B-%E2%80%93-%D0%9F%D0%BE%D0%B4%D0%B0%D1%80%D0%BA%D0%B8-%D0%BD%D0%B0-Genshin-Impact-%D0%93%D0%B5%D0%BD%D1%88%D0%B8%D0%BD-%D0%98%D0%BC%D0%BF%D0%B0%D0%BA%D1%82-%D1%84%D0%B5%D0%B2%D1%80%D0%B0%D0%BB%D1%8C-2023.jpg"
          alt=""
        />
      </div>
      <div className={classes.aboutME}>
        <img
          src="https://play-lh.googleusercontent.com/b_Q-FfyVJRQggiq7g1pNT-ZiqysmrZJPVo4rAchMk0mSpBwHCSo_04W-E1MtRy3hJms=w240-h480-rw"
          alt=""
        />
        <div className={classes.info}>
          <div>Sergheev Ivan</div>
          <div>Date of birth: 12.10.2001</div>
          <div>City: Chisinau</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
