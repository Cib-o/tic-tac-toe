import React from "react";

function TopSection(props) {
  return (
    <div className="top-section">
      <img src="./assets/logo.svg" alt="logo"></img>
      <div className="x-o-turn">
        <img src={props.turn === "X" ? "./assets/icon-x-unselected.svg" : "./assets/icon-o.svg"} alt="icon-x" />
        <h4>Turn</h4>
      </div>
      <button className="restart-button">
        <img src="./assets/icon-restart.svg" alt="icon-restart" />
      </button>
    </div>
  );
}

export default TopSection;