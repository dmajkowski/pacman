import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.js";
import Board from "./components/Board";

function App() {
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(1000000);

  return (
    <div className="App">
      <Header score={score} />
      {maxScore > score ? (
        <Board setScore={setScore} setMaxScore={setMaxScore} />
      ) : (
        `Gratulacje! WYGRAŁEŚ!`
      )}
    </div>
  );
}

export default App;
