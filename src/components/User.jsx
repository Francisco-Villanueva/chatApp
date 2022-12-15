import React from "react";
import LogIn from "./LogIn";
import LogOut from "./LogOut";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./styles/User.css";

export default function User() {
  const [user] = useAuthState(auth);
  console.log(user);

  const userImg = user
    ? user.photoURL
    : "https://cdn-icons-png.flaticon.com/512/149/149071.png";
  const userName = user ? user.displayName : "User Namer";
  return (
    <div className="user-main">
      <div className="app-title">
        <h3>Rapi-chat</h3>
      </div>
      <article className="card-user">
        <div className="user-data">
          <img src={userImg} alt="user photo" />
          <p>{userName}</p>
        </div>
      </article>
      {user ? <LogOut /> : <LogIn />}
    </div>
  );
}
