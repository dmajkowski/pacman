import React, { Component } from "react";
import "./style.css";
import { ReactComponent as PacmanSvg } from "./pacman.svg";

class Pacman extends Component {
  state = {
    direction: "right",
    position: {
      top: 0,
      left: 0,
    },
  };

  render() {
    return (
      <div className="pacman" style={this.state.position}>
        <PacmanSvg />
      </div>
    );
  }
}

Pacman.defaultProps = {
  step: 50,
  size: 50,
  //TODO: move to config
  border: 10 * 2,
  topScoreBoardHeight: 50,
};

export default Pacman;
