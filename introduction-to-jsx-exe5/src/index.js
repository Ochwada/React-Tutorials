import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Greetings from "./Greetings";

// -------Body ---
const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <div>
    <Greetings />
    <App />
  </div>
);
