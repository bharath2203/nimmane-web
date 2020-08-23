import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";
import IDs from "./ChatBotConfig";
import { Redirect } from "react-router";

const RedirectToNew = (props) => {
  return <Redirect to="/new"></Redirect>;
};

const RedirectToRents = (props) => {
  return <Redirect to="/rents"></Redirect>;
};

const RedirectToLease = (props) => {
  return <Redirect to="/leases"></Redirect>;
};

const RedirectToSale = (props) => {
  return <Redirect to="/sale"></Redirect>;
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
          trigger: "rent_final_redirect",
        },
        {
          value: "lease",
          label: "LEASE",
          trigger: "lease_final_redirect",
        },
        {
          value: "sale",
          label: "SALE",
          trigger: "sales_final_redirect",
        },
      ],
    },
    {
      id: "rent_final_redirect",
      message: "I am redirecting you to rents page. Have a nice day!",
      trigger: "rent_final",
    },
    {
      id: "rent_final",
      component: <Redirect to="/rents"></Redirect>,
    },
    {
      id: "lease_final_redirect",
      message: "I am redirecting you to leases page. Have a nice day!",
      trigger: "lease_final",
    },
    {
      id: "lease_final",
      component: <Redirect to="/leases"></Redirect>,
    },
    {
      id: "sales_final_redirect",
      message: "I am redirecting you to sales page. Have a nice day!",
      trigger: "sales_final",
    },
    {
      id: "sales_final",
      component: <Redirect to="/sales"></Redirect>,
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
