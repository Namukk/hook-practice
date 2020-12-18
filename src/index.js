import React from "react";
import ReactDOM from "react-dom";
import { UseInputApp } from "./UseInputApp";
import { UseStateApp } from "./UseStateApp";
import { UseConfirmApp } from "./UseConfirmApp";
import { UseNetworkApp } from "./UseNetworkApp";

ReactDOM.render(
  <React.StrictMode>
    <>
      <UseStateApp />
      <UseInputApp />
      <UseConfirmApp />
      <UseNetworkApp />
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
