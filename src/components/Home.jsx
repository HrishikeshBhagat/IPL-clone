import React, { useState } from "react";
import csk_logo from "../images/teams_logo/csk.jpeg";
import dc_logo from "../images/teams_logo/dc.jpeg";
import gt_logo from "../images/teams_logo/gt.png";
import kkr_logo from "../images/teams_logo/kkr.jpeg";
import lsg_logo from "../images/teams_logo/lsg.webp";
import WinnerContext from "../contexts/WinnerContext";
import Winners from "./Winners";
import './style.css'

export const Home = () => {
    const [winner, setWinner] = useState("Chennai Super Kings");
    return(
        <>
        <div >
        <div className="ui-parent">
            <div className="ui container">
      <div >

        <h4>Select a winner:</h4>
        <br />
        <br />
        <div className="win-team-icon">
          <img
            style={{ height: "40px" }}
            src={csk_logo}
            onClick={() => setWinner("Chennai Super Kings")}
          />
          <img
            style={{ height: "40px" }}
            src={dc_logo}
            onClick={() => setWinner("Delhi Capitals")}
          />
          <img
            style={{ height: "40px" }}
            src={gt_logo}
            onClick={() => setWinner("Gujarat Titans")}
          />
          <img
            style={{ height: "40px" }}
            src={kkr_logo}
            onClick={() => setWinner("Kolkata Knight Riders")}
          />
          <img
            style={{ height: "40px" }}
            src={lsg_logo}
            onClick={() => setWinner("Lucknow Super Giants")}
          />
        </div>
        <br />
        <br />
        <WinnerContext.Provider value={winner}>
          <Winners />
        </WinnerContext.Provider>
      </div>
      
    </div>
        </div>
        <div className="home-child">
        <img src="https://assets.iplt20.com/bcci/articles/1655276240__RAJ0314%20%281%29.jpg" class="img-fluid" alt="..."></img>

        </div>

        </div>
        
        </>
    )
}