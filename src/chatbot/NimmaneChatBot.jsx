import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";
import IDs from "./ChatBotConfig";
import { Redirect } from "react-router";

const RedirectToNew = (props) => {
  return <Redirect to="/new"></Redirect>;
};

const NimmaneChatBot = (props) => {
  const config = {
    width: "350px",
    height: "500px",
    floating: true,
    recognitionEnable: true,
    speechSynthesis: { enable: true, lang: "en" },
    opened: true,
  };
  const steps = [
    {
      id: "1",
      message: "Hi, Welcome to Nimmane website. Please tell your name.",
      trigger: "name",
    },
    {
      id: "name",
      user: true,
      trigger: "greet",
    },
    {
      id: "greet",
      message:
        "Hi {previousValue}! We are happy that you are here. We are honoured to serve you. What type of service do you want?",
      trigger: "buy_or_sale",
    },
    {
      id: "buy_or_sale",
      options: [
        {
          value: "buy",
          label: "BUY",
          trigger: "buy_type_greet",
        },
        {
          value: "sale",
          label: "SELL",
          trigger: "sale_redirect",
        },
      ],
    },
    {
      id: "sale_redirect",
      message:
        "I am redirecting you to upload page, please enter the details of the property there. Thank you",
      trigger: "sale",
    },
    {
      id: "sale",
      component: <Redirect to="/new"></Redirect>,
      end: true,
    },
    {
      id: "buy_type_greet",
      message: "Please select type of property you want to check",
      trigger: "buy_type",
    },
    {
      id: "buy_type",
      options: [
        {
          value: "rent",
          label: "RENT",
          trigger: "buy_filter_greet",
        },
        {
          value: "lease",
          label: "LEASE",
          trigger: "buy_filter_greet",
        },
        {
          value: "sale",
          label: "SALE",
          trigger: "buy_filter_greet",
        },
      ],
    },
    {
      id: "buy_filter_greet",
      message:
        "You have selected {previousValue}. We also provide options for filtering.",
      end: true,
    },
  ];

  return <ChatBot steps={steps} {...config}></ChatBot>;
};

export default NimmaneChatBot;
