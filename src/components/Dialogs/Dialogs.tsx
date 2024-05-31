import React from "react";
import classes from "./Dialogs.module.css";
import { DialogsProps, PostProps, messagesProps } from "../../redux/state";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props: {
  dialogsData: DialogsProps[];
  messages: messagesProps[];
}) => {
  let dialogElements = props.dialogsData.map(
    (dialog: { id: number; name: string }) => (
      <DialogsItem key={dialog.id} name={dialog.name} id={dialog.id} />
    )
  );

  let messagesElements = props.messages.map(
    (message: { id: number; message: string }) => (
      <Message key={message.id} message={message.message} id={message.id} />
    )
  );

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItem}>{dialogElements}</div>
      <div className={classes.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
