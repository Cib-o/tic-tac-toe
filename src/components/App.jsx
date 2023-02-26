import React, { useState } from "react";
import GameMenu from "./GameMenu";
import GameStart from "./GameStart";

function App() {
  const [data, setData] = useState({
    gameMode: false,
    mark: "X",
  });

  return !data.gameMode ? (
    <GameMenu
      onData={(handleData) => {
        setData(handleData);
      }}
    />
  ) : (
    <GameStart
      data={data}
      onData={(handleData) => {
        if (handleData) {
          setData({
            gameMode: false,
            mark: "X",
          });
        }
      }}
    />
  );
}

export default App;