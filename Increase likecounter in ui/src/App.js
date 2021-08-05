import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [likecounter, setlikecounter] = useState(0);

  function likeClickHandler(){
    var newlikecounter = likecounter +1;
    setlikecounter(newlikecounter);
  }

  return (
    <div className="App">
      <h1>Inside Outt </h1>
      <button onClick={likeClickHandler}> Like me </button> {likecounter}
    </div>
  );
}
