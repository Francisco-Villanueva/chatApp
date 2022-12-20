import React from "react";
import { auth, db } from "../firebase";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import Message from "./Message";
import "./styles/Chat.css";
import SendMessage from "./SendMessage";

export default function Chat() {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    const newQuery = query(collection(db, "messages"), orderBy("timestamp"));

    const unsubscribe = onSnapshot(newQuery, (querySnapshot) => {
      let currentMsg = [];

      querySnapshot.forEach((e) => {
        currentMsg.push({ content: e.data(), id: e.id });
        // console.log(e.data())
      });

      setMessage(currentMsg);
    });

    return unsubscribe;
  }, []);
  return (
    <div className="chat-main">
      <section className="chat-container">
        <div className="messages-container">
          {message &&
            message.map((m) => <Message key={m.id} msg={m.content} />)}
        </div>
        <div className="sender-container">
          <SendMessage />
        </div>
      </section>
    </div>
  );
}
