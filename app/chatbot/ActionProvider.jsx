import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  // Existing handleHello function
  const handleHello = () => {
    const botMessage = createChatBotMessage("Hello. Nice to meet you.");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // Existing handleCat function
  const handleCat = () => {
    const botMessage = createChatBotMessage("Here's a nice cat picture for you!", {
      widget: "catPicture",
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleDog = () => {
    const botMessage = createChatBotMessage("Here's a nice doggy picture for you!", {
      widget: "dogPicture",
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // New function to handle button choices
  const handleButtonChoice = (choice) => {
    const botMessage = createChatBotMessage(`You selected: ${choice}`);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleAnimalChoice = (animal) => {
    const botMessage = createChatBotMessage(`You selected: ${animal}. Great choice!`);
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // Return with the new function added to the actions object
  return (
    <div>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleCat,
            handleDog,
            handleAnimalChoice,
            handleButtonChoice,
          },
          key: index,
        });
      })}
    </div>
  );
};

export default ActionProvider;
