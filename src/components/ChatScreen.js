import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import "../ChatScreen.css";
export default function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Ellen",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSZFOZVX0pISwyfK8dk_TT80-aipmAFgtCN4w&usqp=CAU",
      message: "Whats up?",
    },
    {
      name: "Ellen",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSZFOZVX0pISwyfK8dk_TT80-aipmAFgtCN4w&usqp=CAU",
      message: "How's it going?",
    },
    {
      message: "Hi! I'm good. Thanks!",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        You matched with ellen on 10/08/20
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}
      <div className="chatScreen__input">
        <form>
          <input
            type="text"
            className="chatScreen__inputField"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="chatScreen__inputButton" onClick={handleSend}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
