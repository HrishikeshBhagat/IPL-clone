import React from "react";
import WinnerContext from "../contexts/WinnerContext";
import './style.css'

const Winner = () => {
  return (
    <div>
      <WinnerContext.Consumer>
        {(winner) => {
          return (
            <div className="winTeam">
              Winner: <span style={{ color: "orange" }}> {winner}</span>
            </div>
          );
        }}
      </WinnerContext.Consumer>
    </div>
  );
};

export default Winner;
