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

  constructor(props) {
    super(props);
    this.pacmanRef = React.createRef();
  }

  componentDidMount() {
    this.pacmanRef.current.focus();
  }

  handleKeyDown = (e) => {
    console.log(e.keyCode, e.key);
  };

  render() {
    return (
      <div
        ref={this.pacmanRef}
        className="pacman"
        tabIndex="0"
        style={this.state.position}
        onKeyDown={this.handleKeyDown}
      >
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
