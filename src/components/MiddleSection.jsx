import React, { useEffect, useState } from "react";
import GameEnd from "./GameEnd";

function MiddleSection(props) {
  const { gameMode, mark, restartGame } = props;

  const [turn, setTurn] = useState("X");
  const [cells, setCells] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState();
  const [boxId, setBoxId] = useState();
  const [score, setScore] = useState({
    x: 0,
    t: 0,
    o: 0,
  });

  const [quitGame, setQuitGame] = useState(false);

  useEffect(() => {
    const data = {
      turn: turn,
      score: score,
      quitGame: quitGame,
    };

    props.onData(data);
  });
  useEffect(() => {
    if (!boxId) return;

    const firstBox = document.getElementById("box" + boxId[0]);
    const secondBox = document.getElementById("box" + boxId[1]);
    const thirdBox = document.getElementById("box" + boxId[2]);

    firstBox.classList.add(`winner-${winner.toLowerCase()}-box`);
    secondBox.classList.add(`winner-${winner.toLowerCase()}-box`);
    thirdBox.classList.add(`winner-${winner.toLowerCase()}-box`);
  });
  useEffect(() => {
    if (restartGame) {
      setBoxId();
      setWinner();
      setCells(Array(9).fill(""));

      setScore({
        x: 0,
        t: 0,
        o: 0,
      });
    }
  }, [restartGame]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (gameMode === "CPU" && turn !== mark) {
      if (!winner) {
        const randomNum = Math.floor(Math.random() * 9);
        let squares = [...cells];

        if (cells[randomNum] === "") {
          squares[randomNum] = turn;
          setTurn(mark);
        }

        checkForWinner(squares);
        setCells(squares);
      }
    }
  });

  const checkForWinner = (squares) => {
    if (!squares.includes("")) {
      setScore({
        x: score.x,
        t: score.t + 1,
        o: score.o,
      });
      setWinner("T");
    }

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
          setBoxId([pattern[0], pattern[1], pattern[2]]);
          setWinner(squares[pattern[0]]);

          if (squares[pattern[0]] === "X") {
            setScore({
              x: score.x + 1,
              t: score.t,
              o: score.o,
            });
          } else if (squares[pattern[0]] === "O") {
            setScore({
              x: score.x,
              t: score.t,
              o: score.o + 1,
            });
          }
        }
      });
    }
  };

  const handleClick = (id) => {
    if (cells[id] !== "") return;

    if (gameMode === "CPU" && turn === mark) {
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
    } else if (gameMode === "P1VSP2") {
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
    }
  };

  const mouseEnter = (id) => {
    if (cells[id] !== "") return;

    if (gameMode === "CPU" && turn === mark) {
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
    } else if (gameMode === "P1VSP2") {
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

  const handleNextRound = () => {
    setBoxId();
    setWinner();
    setCells(Array(9).fill(""));
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
      {winner && (
        <>
          <GameEnd
            winner={winner}
            gameMode={gameMode}
            mark={mark}
            onData={(data) =>
              data.quitGame ? setQuitGame(true) : handleNextRound()
            }
          />
        </>
      )}
    </div>
  );
}

export default MiddleSection;