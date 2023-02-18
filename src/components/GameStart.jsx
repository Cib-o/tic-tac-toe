import React from "react";

function GameStart(props) {
  const { gameMode, mark } = props.data;

  return (
    <div className="game-start">
      <div className="top-section">
        <img src="./assets/logo.svg" alt="logo"></img>
        <div className="x-o-turn">
          <img src="./assets/icon-x-unselected.svg" alt="icon-x" />
          <h4>Turn</h4>
        </div>
        <button className="restart-button">
          <img src="./assets/icon-restart.svg" alt="icon-restart" />
        </button>
      </div>

      <div className="middle-section">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>

      <div className="bottom-section">
        <div className="x-score">
          <p>X {gameMode === "CPU" ? mark === "X" ? "(You)" : "(CPU)" : mark === "X" ? "(P1)" : "(P2)"}</p>
          <h2>0</h2>
        </div>

        <div className="ties-score">
          <p>Ties</p>
          <h2>0</h2>
        </div>

        <div className="o-score">
          <p>O {gameMode === "CPU" ? mark === "O" ? "(P1)" : "(CPU)" : mark === "O" ? "(P1)" : "(P2)"}</p>
          <h2>0</h2>
        </div>
      </div>
    </div>
  );
}

export default GameStart;