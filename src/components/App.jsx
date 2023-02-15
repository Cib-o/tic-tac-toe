import React, { useState } from "react";
import GameMenu from "./GameMenu";
import GameStart from "./GameStart";

function App() {
  const [data, setData] = useState({
    gameMode: false,
    mark: "O",
  });

  return !data.gameMode ? (
    <GameMenu
      onData={(handleData) => {
        setData(handleData);
      }}
    />
  ) : (
    <GameStart data={data}/>
  );
}

export default App;