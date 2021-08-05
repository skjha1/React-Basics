import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "💥": " Collision",
  "🦍": "Gorilla",
  "🐼": "Panda"
};

export default function App() {
  const [meaning, setmeaning] = useState(" ");

  function emojiInputHandler(event) {
    var userinput = event.target.value;
    var meaning = emojiDictionary[userinput];

    if (meaning === undefined) {
      meaning = " We don't have this in our databse";
    }
    // console.log(meaning);
    setmeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Inside Outt </h1>
      <input onChange={emojiInputHandler} />
      <h2>Meaning is: {meaning}</h2>
    </div>
  );
}
