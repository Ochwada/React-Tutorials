import React from "react";
import ReactDOM from "react-dom";

import Contacts from "./components/Contacts";


ReactDOM.render(
  <div>
    <h1 className="heading">My Contacts</h1>
    <Contacts />
  </div>,
  document.getElementById("root")
);
