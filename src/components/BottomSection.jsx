import React from "react";

function BottomSection(props) {
  const { gameMode, mark } = props;

  return (
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
  );
}

export default BottomSection;