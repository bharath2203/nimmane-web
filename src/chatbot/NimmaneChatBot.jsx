import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";
import IDs from "./ChatBotConfig";

const NimmaneChatBot = props => {
  const config = {
    width: "350px",
    height: "400px",
    floating: true
  };
  const steps = [
    {
      id: "Greet",
      message: "Hello, Welcome to Nimmane Web app. I am your chatbot.",
      trigger: IDs.MAIN_GREETING
    },
    {
      id: IDs.MAIN_GREETING,
      message: "I would like to help you!!!",
      trigger: IDs.MAIN_OPTIONS
    },
    {
      id: IDs.MAIN_GREETING,
      options: [
        {
          value: "buy property",
          label: "Buy Property",
          trigger: IDs.BUY_GREETING
        },
        {
          value: "sale property",
          label: "Sale Property",
          trigger: IDs.SELL_GREETING
        }
      ]
    },
    {
      id: IDs.BUY_GREETING,
      message: "You selected buy property",
      end: true
    },
    {
      id: IDs.SELL_GREETING,
      message: "You selected sale property",
      end: true
    },
    {
      id: IDs.BUY_OPTIONS,
      options: [
        {
          value: "rent",
          label: "RENT",
          end: true
        }
      ]
    }
  ];

  return <ChatBot steps={steps} {...config}></ChatBot>;
};

export default NimmaneChatBot;
