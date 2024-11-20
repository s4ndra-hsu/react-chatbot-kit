// in MessageParser.jsx
import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.includes("hello")) {
      actions.handleHello();
    }

    if (message.includes("Cat") || message.includes("gato")) {
      actions.handleCat();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          parse: (message) => parse(message, index),
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
