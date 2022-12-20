import { async } from "@firebase/util";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { db, auth } from "../firebase";
import "./styles/SendMessage.css";
export default function SendMessage() {
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, displayName, photoURL } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: input,
      name: displayName,
      uid,
      photo: photoURL,
      timestamp: serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="sendForm">
      <form className="form-main" onSubmit={sendMessage}>
        <input
          type="text"
          placeholder="Enter your message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
