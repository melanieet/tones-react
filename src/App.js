import React from "react";
import "./App.css";
import Keys from "./Keys";

function App() {
  const notes = [
    "C4",
    "D4",
    "E4",
    "G4",
    "A4",
    "C5",
    "D5",
    "E5",
    "G5",
    "A5",
    "C6",
  ];

  return (
    <div className="App">
      <h1>Keyboard with React and Tone.js</h1>
      <div>
        <Keys notes={notes} />
      </div>
      <div>
        <button>Pentatonic</button>
        <button>Dorian</button>
        <button>Blues</button>
      </div>
    </div>
  );
}

export default App;
