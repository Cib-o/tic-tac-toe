import React, { useEffect, useState } from "react";
import TopSection from "./TopSection";
import MiddleSection from "./MiddleSection";
import BottomSection from "./BottomSection";

function GameStart(props) {
  const { gameMode, mark } = props.data;
  const [turn, setTurn] = useState("");
  const [score, setScore] = useState("");
  const [restartGame, setRestartGame] = useState(false);
  
  const handleData = (data) => {
    setTurn(data.turn);
    setScore(data.score);

    handleQuitGame(data.quitGame);
  };

  const handleRestart = (data) => {
    setRestartGame(data);
  };

  const handleQuitGame = (e) => {
    props.onData(e);
  };

  useEffect(() => {
    if (restartGame) {
      setRestartGame(false);
    }
  }, [restartGame]);

  return (
    <div className="game-start">
      <TopSection
        turn={turn}
        onButtonClick={handleRestart}
      />

      <MiddleSection
        gameMode={gameMode}
        mark={mark}
        restartGame={restartGame}
        onData={handleData}
      />

      <BottomSection 
        gameMode={gameMode}
        mark={mark}
        score={score}
      />
    </div>
  );
}

export default GameStart;