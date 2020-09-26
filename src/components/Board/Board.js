import React, { Component } from "react";
import "./style.css";
import Pacman from "../Pacman";

class Board extends Component {
  render() {
    return (
      <div className="board">
        {/* <Food/> */}
        <Pacman />
        {/* <Ghost/> */}
      </div>
    );
  }
}

export default Board;
