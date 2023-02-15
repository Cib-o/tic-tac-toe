import React, { useEffect, useState } from "react";

function GameMenu(props) {
  const [gameMenuData, setGameMenuData] = useState({
    gameMode: false,
    mark: "O",
  });

  function changeMark(event) {
    const markX = document.getElementById("markX");
    const markO = document.getElementById("markO");
    const target = event.target;

    if (target.className === "x-selected" || target.className === "o-selected") return;

    if (target.className === "x-unselected") {
      target.classList.remove(target.className);
      target.classList.add("x-selected");
      setGameMenuData({
        gameMode: gameMenuData.gameMode,
        mark: "X",
      });

      markO.classList.remove("o-selected");
      markO.classList.add("o-unselected");
    } else {
      target.classList.remove(target.className);
      target.classList.add("o-selected");
      setGameMenuData({
        gameMode: gameMenuData.gameMode,
        mark: "O",
      });

      markX.classList.remove("x-selected");
      markX.classList.add("x-unselected");
    }
  }

  function p1vscpu() {
    setGameMenuData({
      gameMode: "CPU",
      mark: gameMenuData.mark,
    });
  }

  function p1vsp2() {
    setGameMenuData({
      gameMode: "P1VSP2",
      mark: gameMenuData.mark,
    });
  }

  useEffect(() => props.onData(gameMenuData));

  return (
    <div className="game-menu">
      <img src="./assets/logo.svg" alt="logo"></img>

      <div className="container">
        <h4>Pick player 1's mark</h4>

        <div className="x-and-o">
          <div onClick={changeMark} id="markX" className="x-unselected">
            <img src="./assets/icon-x.svg" alt="icon-x"></img>
          </div>

          <div onClick={changeMark} id="markO" className="o-selected">
            <img src="./assets/icon-o.svg" alt="icon-o"></img>
          </div>
        </div>

        <p>Remember: X goes first</p>
      </div>

      <button onClick={p1vscpu} className="p1-vs-cpu">
        New Game (vs CPU)
      </button>
      <button onClick={p1vsp2} className="p1-vs-p2">
        New Game (vs player)
      </button>
    </div>
  );
}

export default GameMenu;