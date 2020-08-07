import React from "react";
import "../Chats.css";
import Chat from "./Chat";

export default function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Sarah"
        message="Hey! How are You? 😀"
        timestamp="35 minutes ago"
        profilePic="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
      />
      <Chat
        name="Ellen"
        message="Whats up? 👐"
        timestamp="55 minutes ago"
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSZFOZVX0pISwyfK8dk_TT80-aipmAFgtCN4w&usqp=CAU"
      />
      <Chat
        name="Sandra"
        message="Ola!"
        timestamp="3 days ago"
        profilePic="https://i1.wp.com/coolpictures.in/wp-content/uploads/2020/03/whatsapp-dp-for-girls-29.jpg?w=586&ssl=1"
      />
      <Chat
        name="Natasha"
        message="Let's eat something! 🍔"
        timestamp="1 week ago"
        profilePic="https://i.pinimg.com/originals/fb/25/ac/fb25ac2832194c7494ef28bd5e33d9eb.jpg"
      />
    </div>
  );
}
