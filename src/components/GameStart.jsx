import React from "react";
import TopSection from "./TopSection";
import MiddleSection from "./MiddleSection";
import BottomSection from "./BottomSection";

function GameStart(props) {
  const { gameMode, mark } = props.data;

  return (
    <div className="game-start">
      <TopSection />

      <MiddleSection />

      <BottomSection 
        gameMode={gameMode}
        mark={mark}
      />
    </div>
  );
}

export default GameStart;