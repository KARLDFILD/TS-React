import React from "react";
import classes from "./Nav.module.css";
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <div className={classes.nav}>
      <div className={classes.item}>
        <NavLink to="/">Profile</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/dialogs">Message</NavLink>
      </div>
      <div className={classes.item}>News</div>
      <div className={classes.item}>Music</div>
      <div className={classes.item}>Settings</div>
    </div>
  );
};

export default Nav;
