import classes from "../Dialogs.module.css";

const Message = (props: { message: string; id: number }) => {
  return <div className={classes.dialog}>{props.message}</div>;
};

export default Message;
