import React from "react";

const MultiplyButtons = ({ actions, setState }) => {
  const handleButtonClick = (choice) => {
    // Add the user's message (choice) to the chatbot messages
    setState((prev) => ({
      ...prev,
      messages: [
        ...prev.messages,
        { type: "user", message: choice }, // User's message
      ],
    }));

    // Call the bot's action to respond to the choice
    if (choice.includes("Cat")) {
      actions.handleCat();
    } else {
      actions.handleDog();
    }
  };

  return (
    <div>
      <button onClick={() => handleButtonClick("Cat")}>Cat</button>
      <button onClick={() => handleButtonClick("Dog")}>Dog</button>
    </div>
  );
};

export default MultiplyButtons;
