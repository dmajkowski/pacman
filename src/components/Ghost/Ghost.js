import React, { Component } from "react";
import { ReactComponent as GhostSvg } from "./ghost.svg";
import "./style.css";

class Ghost extends Component {
  state = {
    direction: "left",
    position: {
      top: 50 * 3,
      left: 50 * 3,
    },
  };

  componentDidMount() {
    this.changeDirectionInterval = setInterval(this.changeDirection, 1000);
    this.moveInterval = setInterval(this.move, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.changeDirectionInterval);
    clearInterval(this.moveInterval);
  }

  changeDirection = () => {
    const arrayOfMovement = ["left", "up", "down", "right"];
    const movement = Math.floor(Math.random() * 4);

    this.setState({ direction: arrayOfMovement[movement] }, () => {});
  };

  move = () => {
    const currentTop = this.state.position.top;
    const currentLeft = this.state.position.left;
    const { step, border, size, topScoreBoardHeight } = this.props;
    const { direction } = this.state;

    if (direction === "up") {
      this.setState({
        position: {
          top: Math.max(currentTop - step, 0),
          left: currentLeft,
        },
        direction: "up",
      });
    } else if (direction === "right") {
      this.setState({
        position: {
          top: currentTop,
          left: Math.min(currentLeft + step, window.innerWidth - border - size),
        },
        direction: "right",
      });
    } else if (direction === "down") {
      this.setState({
        position: {
          top: Math.min(
            currentTop + step,
            window.innerHeight - border - size - topScoreBoardHeight
          ),
          left: currentLeft,
        },
        direction: "down",
      });
    } else if (direction === "left") {
      this.setState({
        position: {
          top: currentTop,
          left: Math.max(currentLeft - step, 0),
        },
        direction: "left",
      });
    }
  };

  render() {
    const { color } = this.props;
    return (
      <div style={this.state.position} className="ghost">
        <GhostSvg className={`ghost-${color}`} />
      </div>
    );
  }
}

Ghost.defaultProps = {
  color: "red",
  step: 50,
  size: 50,
  //TODO: move to config
  border: 10 * 2,
  topScoreBoardHeight: 50,
};

export default Ghost;
