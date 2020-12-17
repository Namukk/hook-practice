import React, { useState } from "react";
import ReactDOM from "react-dom";

// With hooks(useState)

export const UseStateApp = () => {
  const [item, setItem] = useState(0);
  const addItem = () => setItem(item + 1);
  const minusItem = () => setItem(item - 1);
  return (
    <div className="App">
      <h1>{item}</h1>
      <button onClick={addItem}>+</button>
      <button onClick={minusItem}>-</button>
    </div>
  );
};

// Without hooks(useState)

// export default class AppUgly extends React.Component {
//   state = {
//     item: 1
//   };
//   render() {
//     const { item } = this.state;
//     return (
//       <div className="App">
//         <h1>{item}</h1>
//         <button onClick={this.addItem}>+</button>
//         <button onClick={this.minusItem}>-</button>
//       </div>
//     );
//   }
//   addItem = () => {
//     this.setState((state) => {
//       return { item: state.item + 1 };
//     });
//   };
//   minusItem = () => {
//     this.setState((state) => {
//       return { item: state.item - 1 };
//     });
//   };
// }
