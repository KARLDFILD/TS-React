import classes from "../Dialogs.module.css";
import { NavLink } from "react-router-dom";
const DialogsItem = (props: { id: number; name: string }) => {
  let id: string;
  let path = "/dialogs/" + props.id;
  return (
    <div>
      <div className={classes.dialog}>
        <NavLink to={path}>{props.name}</NavLink>
      </div>
    </div>
  );
};

export default DialogsItem;
