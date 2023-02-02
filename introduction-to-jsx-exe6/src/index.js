import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import * as calcs from "./Calc.js";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <div>
    <div>
      <ul>
        <li>{calcs.add(1, 2)} </li>
        <li>{calcs.multipy(2, 3)} </li>
        <li>{calcs.substract(7, 2)} </li>
        <li> {calcs.divide(5, 2)}</li>
      </ul>
    </div>

    <div>
      <App />
    </div>
  </div>
);
