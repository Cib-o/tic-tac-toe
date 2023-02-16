import React from "react";

function GameStart(props) {
  return (
    <div className="game-start">
      <div className="top-section">
        <img src="./assets/logo.svg" alt="logo"></img>
        <div className="x-o-turn">
          <img src="./assets/icon-x-unselected.svg" alt="icon-x" />
          <h4>Turn</h4>
        </div>
        <button className="restart-button"><img src="./assets/icon-restart.svg" alt="icon-restart" /></button>
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
          <p>X (You)</p>
          <h2>0</h2>
        </div>

        <div className="ties-score">
          <p>Ties</p>
          <h2>0</h2>
        </div>

        <div className="o-score">
          <p>O (CPU)</p>
          <h2>0</h2>
        </div>
      </div>
    </div>
  );
}

export default GameStart;