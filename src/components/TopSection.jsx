import React, { useState } from "react";
import GameRestart from "./GameRestart";

function TopSection(props) {
  const [restartGame, setRestartGame] = useState(false);

  const handleClick = () => {
    setRestartGame(true);
  };

  const gameRestart = (data) => {
    props.onButtonClick(data);
    setRestartGame(false);
  };

  return (
    <div className="top-section">
      <img src="./assets/logo.svg" alt="logo"></img>
      <div className="x-o-turn">
        <img src={props.turn === "X" ? "./assets/icon-x-unselected.svg" : "./assets/icon-o-gray.svg"} alt="icon-x" />
        <h4>Turn</h4>
      </div>
      <button onClick={handleClick} className="restart-button">
        <img src="./assets/icon-restart.svg" alt="icon-restart" />
      </button>

      {restartGame && (
        <>
          <GameRestart
            onData={(data) => gameRestart(data)}
          />
        </>
      )}
    </div>
  );
}

export default TopSection;