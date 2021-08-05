import React from "react";
import "./styles.css";

var shoppingList = ["milk", "butter", "catch-up", "bread", "Flowers"];

export default function App() {
  function getBg(index) {
    if (index % 2 === 0) return "pink";
    else return "gray";
  }
  return (
    <div className="App">
      <h1>Print my Shopping List </h1>
      <ul>
        {shoppingList.map(function (item, index) {
          return (
            <li
              key={item}
              style={{ backgroundColor: getBg(index), padding: "1rem" }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
