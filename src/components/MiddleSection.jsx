import React, { useEffect, useState } from "react";

function MiddleSection(props) {
  const [turn, setTurn] = useState("X");
  const [cells, setCells] = useState(Array(9).fill(""));

  useEffect(() => props.onData(turn));

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