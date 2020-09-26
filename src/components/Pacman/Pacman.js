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

  handleKeyPress = (e) => {
    console.log(e.keyCode, e.key);

    const currentTop = this.state.position.top;
    const currentLeft = this.state.position.left;
    const { step } = this.props;

    if (e.key === "ArrowUp") {
      this.setState({
        position: {
          top: currentTop - step,
          left: currentLeft,
        },
        direction: "up",
      });
    } else if (e.key === "ArrowRight") {
      this.setState({
        position: {
          top: currentTop,
          left: currentLeft + step,
        },
        direction: "right",
      });
    } else if (e.key === "ArrowDown") {
      this.setState({
        position: {
          top: currentTop + step,
          left: currentLeft,
        },
        direction: "down",
      });
    } else if (e.key === "ArrowLeft") {
      this.setState({
        position: {
          top: currentTop,
          left: currentLeft - step,
        },
        direction: "left",
      });
    }
  };

  render() {
    const { direction, position } = this.state;
    return (
      <div
        ref={this.pacmanRef}
        className={`pacman pacman-${direction}`}
        tabIndex="0"
        style={position}
        onKeyDown={this.handleKeyPress}
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
