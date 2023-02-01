import React from "react";
import ReactDOM from "react-dom";

const lName = "Ochwada";
const fName = "Linda";
const LuckyNo = 8;

ReactDOM.render(
  <div>
    <div>
      <h1>
        Hello {lName} {fName}!
      </h1>
      <h3> My Lucky number is {LuckyNo} </h3>

      <p>
        I will just generate random numbers here:{" "}
        {Math.floor(Math.random() * 10)}
      </p>
    </div>

    <div>
      <h3>Favourite Cities </h3>
      <ul>
        <li> Rome </li>
        <li> Berlin </li>
        <li> Münich </li>
      </ul>
    </div>
  </div>,

  document.getElementById("root")
);
