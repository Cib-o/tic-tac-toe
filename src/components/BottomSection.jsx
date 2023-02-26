import React from "react";

function BottomSection(props) {
  const { gameMode, mark, score } = props;
  
  return (
    <div className="bottom-section">
    <div className="x-score">
      <p>X {gameMode === "CPU" ? mark === "X" ? "(You)" : "(CPU)" : mark === "X" ? "(P1)" : "(P2)"}</p>
      <h2>{score.x}</h2>
    </div>

    <div className="ties-score">
      <p>Ties</p>
      <h2>{score.t}</h2>
    </div>

    <div className="o-score">
      <p>O {gameMode === "CPU" ? mark === "O" ? "(P1)" : "(CPU)" : mark === "O" ? "(P1)" : "(P2)"}</p>
      <h2>{score.o}</h2>
    </div>
  </div>
  );
}

export default BottomSection;