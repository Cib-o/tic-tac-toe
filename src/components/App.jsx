import React from "react";
import GameMenu from "./GameMenu";

function App() {
  return (
    <div>
      <GameMenu />

      {/* <!-- Game board start --> */}

      {/* <!-- x/o icon --> */} turn

      X (You) {/*  <!-- Your score --> */}
      Ties {/*  <!-- Ties score --> */}
      X (CPU) {/* <!-- CPU score --> */}

      Oh no, you lost
      You won!
      Player {/* <!-- 1/2 -->*/} wins!

      {/*<!-- x/o icon -->*/} takes the round
      Round tied
      Restart game?

      Quit
      Next round
      No, cancel
      Yes, restart

      {/*<!-- Game board end -->*/}
    </div>
  );
}

export default App;