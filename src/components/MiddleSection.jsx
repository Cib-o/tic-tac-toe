import React, { useEffect, useState } from "react";

function MiddleSection(props) {
  const [turn, setTurn] = useState("X");
  const [cells, setCells] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState();
  const [boxId, setBoxId] = useState();

  useEffect(() => props.onData(turn));
  useEffect(() => {
    if(!boxId) return;

    const firstBox = document.getElementById("box" + boxId[0]);
    const secondBox = document.getElementById("box" + boxId[1]);
    const thirdBox = document.getElementById("box" + boxId[2]);

    firstBox.classList.add(`winner-${winner.toLowerCase()}-box`);
    secondBox.classList.add(`winner-${winner.toLowerCase()}-box`);
    thirdBox.classList.add(`winner-${winner.toLowerCase()}-box`);
  });

  const checkForWinner = (squares) => {
    let combos = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagonal: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };

    for (let combo in combos) {
      combos[combo].forEach((pattern) => {
        if (
          squares[pattern[0]] === "" ||
          squares[pattern[1]] === "" ||
          squares[pattern[2]] === ""
        ) {
        } else if (
          squares[pattern[0]] === squares[pattern[1]] &&
          squares[pattern[1]] === squares[pattern[2]]
        ) {
          setBoxId([
            pattern[0],
            pattern[1],
            pattern[2]
          ]);
          setWinner(squares[pattern[0]]);
        }
      });
    }
  };

  const handleClick = (id) => {
    if (cells[id] !== "") return;

    const box = document.getElementById(`box${id}`);
    let squares = [...cells];

    if (turn === "X") {
      box.classList.add("selected-box-x");
      box.classList.add("selected-box-x");
    } else {
      box.classList.add("selected-box-o");
      box.classList.add("selected-box-o");
    }

    if (turn === "X") {
      squares[id] = "X";
      setTurn("O");
    } else {
      squares[id] = "O";
      setTurn("X");
    }

    checkForWinner(squares);
    setCells(squares);
  };

  const mouseEnter = (id) => {
    if (cells[id] !== "") return;

    const box = document.getElementById(`box${id}`);

    if (turn === "X") {
      box.style.setProperty(
        "--x-o-outline",
        "url(../assets/icon-x-outline.svg)"
      );
    } else {
      box.style.setProperty(
        "--x-o-outline",
        "url(../assets/icon-o-outline.svg)"
      );
    }
  };

  const Box = ({ id }) => {
    return (
      <div
        id={`box${id}`}
        onClick={() => handleClick(id)}
        onMouseEnter={() => mouseEnter(id)}
        className={`${
          cells[id] === "X"
            ? "box selected-box-x"
            : cells[id] === "O"
            ? "box selected-box-o"
            : "box"
        }`}
      ></div>
    );
  };

  return (
    <div className="middle-section">
      <Box id={0} />
      <Box id={1} />
      <Box id={2} />
      <Box id={3} />
      <Box id={4} />
      <Box id={5} />
      <Box id={6} />
      <Box id={7} />
      <Box id={8} />
    </div>
  );
}

export default MiddleSection;