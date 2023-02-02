import React from "react";
import "./styles.css";

export default function Greetings() {
  const hours = new Date().getHours;
  const myName = "Ochwada";

  const customeColor = {
    color: ""
  };

  let greeting;

  if (hours < 12) {
    greeting = "Good Morning, " + myName;
    customeColor.color = "#1A120B";
  } else if (hours > 18) {
    greeting = "Good Afternoon, " + myName;
    customeColor.color = "#7B2869";
  } else {
    greeting = "Good Night, " + myName;
    customeColor.color = "#453C67";
  }
  return <h3 style={customeColor}> {greeting}</h3>;
}
