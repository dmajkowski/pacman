import React, { Component } from "react";
import "./style.css";
import Pacman from "../Pacman";
import Ghost from "../Ghost";
import Food from "../Food";

class Board extends Component {
  constructor(props) {
    super(props);

    this.pacmanRef = React.createRef();

    this.amountOfFood =
      ((window.innerWidth - this.props.foodSize) *
        (window.innerHeight - this.props.topScoreBoardHeight)) /
        (this.props.foodSize * this.props.foodSize) -
      1;

    console.log(this.amountOfFood);
    for (let i = 0; i < this.amountOfFood; i++) {
      this["food" + i] = React.createRef();
    }
  }

  lookForEat = () => {
    const pacmanX = this.pacmanRef.current.state.position.left;
    const pacmanY = this.pacmanRef.current.state.position.top;
    const pacmanSize = this.pacmanRef.current.props.size;

    const pacmanLastX = pacmanX + pacmanSize / 2;
    const pacmanLastY = pacmanY + pacmanSize / 2;

    for (let i = 0; i <= this.amountOfFood; i++) {
      const currentFood = this["food" + i].current;
      if (currentFood) {
        const currentFoodX = currentFood.state.position.left;
        const currentFoodY = currentFood.state.position.top;
        const currentFoodSize = currentFood.props.foodSize;
      }
    }
  };

  render() {
    const { foodSize, border, topScoreBoardHeight } = this.props;
    //counting how big board should be,  size only by multiplying 50
    const boardWidth = window.innerWidth - 20 - ((window.innerWidth - 20) % 50);
    const boardHeight =
      window.innerHeight - 70 - ((window.innerHeight - 20) % 50);
    let foods = [];
    let currentTop = 0;
    let currentLeft = 1 * foodSize;
    for (let i = 0; i < this.amountOfFood; i++) {
      if (currentLeft + foodSize >= window.innerWidth - border) {
        currentTop += foodSize;
        currentLeft = 0;
      }
      if (
        currentTop + foodSize >=
        window.innnerHeight - border - topScoreBoardHeight
      ) {
        break;
      }
      const position = { left: currentLeft, top: currentTop };
      currentLeft += foodSize;
      foods.push(
        <Food
          key={`food-emem-${i}`}
          position={position}
          ref={this["food" + i]}
        />
      );
    }

    return (
      <div
        style={{
          width: boardWidth,
          height: boardHeight,
        }}
        className="board"
      >
        {foods}
        <Food />
        <Pacman ref={this.pacmanRef} />
        <Ghost color="red" />
        <Ghost color="yellow" />
        <Ghost color="pink" />
      </div>
    );
  }
}

Board.defaultProps = {
  foodSize: 50,
  border: 10 * 2,
  topScoreBoardHeight: 50,
};

export default Board;
