import React from "react";

function GameMenu() {
  return (
    <div>
      <img src="./assets/logo.svg" alt="logo"></img>

      <div className="container">
        <h4>Pick player 1's mark</h4>

        <div className="x-and-o">
          <div className="x-unselected">
            <img src="./assets/icon-x.svg" alt="icon-x"></img>
          </div>

          <div className="o-selected">
            <img src="./assets/icon-o.svg" alt="icon-o"></img>
          </div>
        </div>

        <p>Remember: X goes first</p>
      </div>

      <button className="p1-vs-cpu">New Game (vs CPU)</button>
      <button className="p1-vs-p2">New Game (vs player)</button>
    </div>
  );
}

export default GameMenu;