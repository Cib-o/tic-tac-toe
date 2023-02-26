import React from "react";

function GameEnd(props) {
  const { winner, gameMode, mark } = props;

  const handleClickQuitGame = () => {
    props.onData({
      quitGame: true
    });
  };

  const handleClickNextRound = () => {
    props.onData({
      nextRound: true
    });
  };

  return (
    <div className="game-end">
      <div>
        <h4>{winner === "T" ? "" : gameMode === "CPU" ? winner === mark && mark === winner ? "You Won!" : "Oh no, you lost..." : winner === mark && mark === winner ? "Player 1 Wins!" : "Player 2 Wins!"}</h4>
        <h1 style={{color: winner === "X" ? "var(--light-blue)" : winner === "O" && "var(--light-yellow)"}}>{winner === "X" ? <img className="winner-icon" src="../assets/icon-x.svg" alt="winner-icon"></img> : winner === "O" && <img className="winner-icon" src="../assets/icon-o.svg" alt="winner-icon"></img>}{winner === "T" ? "Round Tied" : "Takes The Round"}</h1>
        <div>
          <button onClick={handleClickQuitGame} className="quit-button">Quit</button>
          <button onClick={handleClickNextRound} className="next-round-button">Next round</button>
        </div>
      </div>
    </div>
  );
}

export default GameEnd;