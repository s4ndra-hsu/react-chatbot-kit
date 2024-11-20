"use client";

import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

import config from "./chatbot/config.js";
import MessageParser from "./chatbot/Messageparser.js";
import ActionProvider from "./chatbot/ActionProvider.jsx";

export const MyComponent = () => {
  return (
    <div>
      <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
    </div>
  );
};

export default MyComponent;
