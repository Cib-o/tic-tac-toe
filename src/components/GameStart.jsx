import React, { useState } from "react";
import TopSection from "./TopSection";
import MiddleSection from "./MiddleSection";
import BottomSection from "./BottomSection";

function GameStart(props) {
  const { gameMode, mark } = props.data;
  const [data, setData] = useState("");
  
  return (
    <div className="game-start">
      <TopSection
        turn={data}
      />

      <MiddleSection
        gameMode={gameMode}
        mark={mark}
        onData={(handleData) => {
          setData(handleData)
        }}
      />

      <BottomSection 
        gameMode={gameMode}
        mark={mark}
      />
    </div>
  );
}

export default GameStart;