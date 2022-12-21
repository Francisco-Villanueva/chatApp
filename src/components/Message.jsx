import React from "react";
import { auth } from "../firebase";
import "./styles/Message.css";

import { formatDate } from "./helpers";
export default function Message(props) {
  let newStyle = "message";
  if (auth.currentUser) {
    const user = auth.currentUser.uid;
    const newUser = props.msg.uid;

    newStyle =
      user === newUser ? "my-message msg-format" : "message msg-format";
  }

  // console.log(props.msg.timestamp, "TIEMSTAMPS");
  return (
    <div className={newStyle}>
      <div className="msgYimg">
        <p className="text">{props.msg.text}</p>
        <img src={props.msg.photo} alt="userPhoto" />
      </div>
      <p className="time">
        {props.msg.timestamp ? formatDate(props.msg.timestamp) : "loading"}
      </p>
    </div>
  );
}
