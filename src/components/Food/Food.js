import React, { Component } from "react";
import "./style.css";

class Food extends Component {
  state = {
    position: {
      top: this.props.position.top,
      left: this.props.position.left,
    },
    display: this.props.display,
  };

  render() {
    const { position } = this.state;
    return (
      <div
        style={position}
        className={this.props.display ? "food" : "food hidden"}
      >
        <div className="food-dot"></div>
      </div>
    );
  }
}

Food.defaultProps = {
  foodSize: 50,
  position: {
    top: 0,
    left: 0,
  },
};

export default Food;
