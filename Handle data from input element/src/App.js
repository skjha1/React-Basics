import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [userinput, setuserinput] = useState(" ");

  function inputChangeHandler(event) {
    console.log(event.target.value);
    setuserinput(event.target.value);
  }

  return (
    <div className="App">
      <h1>Inside Outt </h1>
      <input onChange={inputChangeHandler} />
      <div>Welcome {userinput}</div>
    </div>
  );
}
