import React from "react";
import ReactDOM from "react-dom";
import { UseInputApp } from "./UseInputApp";
import { UseStateApp } from "./UseStateApp";
import { UseConfirmApp } from "./UseConfirmApp";
import { UseNetworkApp } from "./UseNetworkApp";
import { UseEffectApp } from "./UseEffectApp";

ReactDOM.render(
  <React.StrictMode>
    <>
      <UseStateApp />
      <UseEffectApp />
      <UseInputApp />
      <UseConfirmApp />
      <UseNetworkApp />
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
