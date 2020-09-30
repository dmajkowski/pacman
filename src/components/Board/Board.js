import React, { Component } from "react";
import "./style.css";
import Pacman from "../Pacman";
import Ghost from "../Ghost";
import Food from "../Food";

class Board extends Component {
  state = {
    food: [],
  };

  constructor(props) {
    super(props);

    this.pacmanRef = React.createRef();
  }

  componentDidMount() {
    const food = [];
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
        food.push({
          key: `${i}${j}`,
          position: { top: i * 50, left: j * 50 },
          display: true,
        });
      }
    }
    this.eatFood();
    this.setState({ food });
    this.props.setMaxScore(food.length);
  }

  eatFood = () => {
    const pacmanX = this.pacmanRef.current.state.position.left;
    const pacmanY = this.pacmanRef.current.state.position.top;
    const pacmanLastX = pacmanX + 50 / 2;
    const pacmanLastY = pacmanY + 50 / 2;
    const { food } = this.state;

    for (let i = 0; i < food.length; i++) {
      if (
        food[i].position.top === pacmanY &&
        food[i].position.left === pacmanX
        //   ||
        // (food[i].position.top === pacmanLastY &&
        //   food[i].position.left === pacmanLastX)
      ) {
        food[i].display = false;
        this.setState({ food });
        break;
      }
    }

    this.props.setScore(
      this.state.food.filter((item) => {
        return item.display === false;
      }).length
    );
  };

  render() {
    //counting how big board should be,  size only by multiplying 50
    const boardWidth = window.innerWidth - 20 - ((window.innerWidth - 20) % 50);
    const boardHeight =
      window.innerHeight - 70 - ((window.innerHeight - 20) % 50);

    return (
      <div
        style={{
          width: boardWidth,
          height: boardHeight,
        }}
        className="board"
      >
        {this.state.food.map((item) => {
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
