import React from "react";
import { auth } from "../firebase";
import "./styles/Message.css";
export default function Message(props) {
  let newStyle = "message";
  if (auth.currentUser) {
    const user = auth.currentUser.uid;
    const newUser = props.msg.uid;

    newStyle = user === newUser ? "my-message chat-styles" : "message ";
  }
  return (
    <article className={newStyle}>
      <div>
        <div className="text-message">
          <p>{props.msg.text}</p>
          <img src={props.msg.photo} alt="userPhoto" />
        </div>
      </div>
    </article>
  );
}
