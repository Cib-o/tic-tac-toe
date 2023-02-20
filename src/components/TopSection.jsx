import React from "react";

function TopSection(props) {
  return (
    <div className="top-section">
      <img src="./assets/logo.svg" alt="logo"></img>
      <div className="x-o-turn">
        <img src="./assets/icon-x-unselected.svg" alt="icon-x" />
        <h4>Turn</h4>
      </div>
      <button className="restart-button">
        <img src="./assets/icon-restart.svg" alt="icon-restart" />
      </button>
    </div>
  );
}

export default TopSection;