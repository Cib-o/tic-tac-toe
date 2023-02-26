import React from "react";

function GameRestart(props) {
  const handleDisagree = () => {
    props.onData(false);
  };

  const handleAgree = () => {
    props.onData(true);
  };

  return (
    <div className="game-restart">
      <div>
        <h1>Restart game?</h1>
        <div>
          <button onClick={handleDisagree} className="disagree-button">No, cancel</button>
          <button onClick={handleAgree} className="agree-button">Yes, restart</button>
        </div>
      </div>
    </div>
  );
}

export default GameRestart;