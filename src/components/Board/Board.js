import React, { Component } from "react";
import "./style.css";
import Pacman from "../Pacman";
import Ghost from "../Ghost";
import Food from "../Food";

class Board extends Component {
  state = {
    foodAmount: 0,
  };

  constructor(props) {
    super(props);

    this.pacmanRef = React.createRef();

    this.food = [];
    for (
      let i = 0;
      i < (window.innerHeight - 70 - ((window.innerHeight - 20) % 50)) / 50;
      i++
    ) {
      for (
        let j = 0;
        j < (window.innerWidth - 20 - ((window.innerWidth - 20) % 50)) / 50;
        j++
      ) {
        this.food.push({
          key: `${i}${j}`,
          position: { top: i * 50, left: j * 50 },
          display: true,
        });
      }
    }
  }

  eatFood = () => {
    const pacmanX = this.pacmanRef.current.state.position.left;
    const pacmanY = this.pacmanRef.current.state.position.top;

    console.log(this.food);
    for (let i = 0; i < this.food.length; i++) {
      if (
        this.food[i].position.top === pacmanY &&
        this.food[i].position.left === pacmanX
      ) {
        // console.log(
        //   `Zjadłem: ${this.food[i].position.top} : ${this.food[i].position.left}`
        // );
        this.food[i].display = false;
        this.setState({ foodAmount: this.food });
      }
    }
  };

  render() {
    // const { foodSize, border, topScoreBoardHeight } = this.props;
    //counting how big board should be,  size only by multiplying 50
    const boardWidth = window.innerWidth - 20 - ((window.innerWidth - 20) % 50);
    const boardHeight =
      window.innerHeight - 70 - ((window.innerHeight - 20) % 50);
    // let currentTop = 0;
    // let currentLeft = 1 * foodSize;
    // for (let i = 0; i < this.amountOfFood; i++) {
    //   if (currentLeft + foodSize >= window.innerWidth - border) {
    //     currentTop += foodSize;
    //     currentLeft = 0;
    //   }
    //   if (
    //     currentTop + foodSize >=
    //     window.innnerHeight - border - topScoreBoardHeight
    //   ) {
    //     break;
    //   }
    //   const position = { left: currentLeft, top: currentTop };
    //   currentLeft += foodSize;
    //   foods.push(
    //     <Food
    //       key={`food-emem-${i}`}
    //       position={position}
    //       ref={this["food" + i]}
    //     />
    //   );
    // }

    return (
      <div
        style={{
          width: boardWidth,
          height: boardHeight,
        }}
        className="board"
      >
        {this.food.map((item) => {
          return (
            <Food
              key={item.key}
              position={{ top: item.position.top, left: item.position.left }}
              display={item.display}
            />
          );
        })}

        <Pacman ref={this.pacmanRef} eatFood={this.eatFood} />
        <Ghost color="red" />
        <Ghost color="yellow" />
        <Ghost color="pink" />
      </div>
    );
  }
}

Board.defaultProps = {};

export default Board;
