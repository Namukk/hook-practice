import React from "react";
import ReactDOM from "react-dom";
import { UseInputApp } from "./UseInputApp";
import { UseStateApp } from "./UseStateApp";
import { UseEffectApp } from "./UseEffectApp";

ReactDOM.render(
  <React.StrictMode>
    <>
    
      <UseStateApp />
      <UseInputApp />
      <UseEffectApp />
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
