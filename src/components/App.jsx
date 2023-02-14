import React, { useState } from "react";
import GameMenu from "./GameMenu";

function App() {
  const [data, setData] = useState({
    gameMode: "",
    mark: "O",
  });

  return (
    <GameMenu
      onData={(handleData) => {
        setData(handleData);
      }}
    />
  );
}

export default App;
