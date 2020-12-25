import React, { useState, useEffect } from "react";

export const UseEffectApp = () => {
  const sayHello = () => console.log("hello");
  const [number, setNumber] = useState(0);
  const [aNumber, setANumber] = useState(0);
  useEffect(sayHello, []);
  return (
    <div className="App">
      <h1>Hi!</h1>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setANumber(number + 1)}>{aNumber}</button>
    </div>
  );
};
