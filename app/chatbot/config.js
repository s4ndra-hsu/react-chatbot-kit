// in config.js
import { createChatBotMessage } from "react-chatbot-kit";
import CatPicture from "../components/CatPicture.jsx";
import DogPicture from "../components/DogPicture.jsx";
import MultiplyButtons from "../components/MultiplyButtons.jsx";
const botName = "ExcitementBot";

const config = {
  initialMessages: [
    createChatBotMessage(`Hi! I'm ${botName}`),
    createChatBotMessage("You wanna see come cute photo? which you wanna?", {
      widget: "MultiplyButtons",
    }),
  ],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  widgets: [
    {
      widgetName: "catPicture",
      widgetFunc: (props) => <CatPicture {...props} />,
      props: {},
      mapStateToProps: [],
    },
    {
      widgetName: "dogPicture",
      widgetFunc: (props) => <DogPicture {...props} />,
      props: {},
      mapStateToProps: [],
    },
    {
      widgetName: "MultiplyButtons",
      widgetFunc: (props) => <MultiplyButtons {...props} />,
      props: {},
      mapStateToProps: [],
    },
  ],
};

export default config;
