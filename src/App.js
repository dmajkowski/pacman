import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.js";

function App() {
  const [score, setScore] = useState(2);
  return (
    <div className="App">
      <Header score={score} />
      {/* <Board/> */}
    </div>
  );
}

export default App;
