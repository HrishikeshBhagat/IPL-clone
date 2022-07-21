import React from "react";
import velocity from "../images/teams_logo/velocity.png";
import supernova from "../images/teams_logo/supernova.png";
import trail from "../images/teams_logo/trail.png";

import IndividualTeam from "./IndividualTeam";
import './style.css'

const WomenTeam = () => {
  return (
    <>
      <div className="teams-head">
      <div style={{ marginTop: "10px" }} class="ui three column grid">
        <div class="column">
          <IndividualTeam
            teamColor="yellow"
            teamLogo={supernova}
            teamId="1"
            teamName="SuperNova"
          />
        </div>
        <div class="column">
          <IndividualTeam
            teamColor="blue"
            teamLogo={trail}
            teamId="2"
            teamName="Trailblazers"
          />
        </div>
        <div class="column">
          <IndividualTeam
            teamColor="black"
            teamLogo={velocity}
            teamId="3"
            teamName="Velocity"
          />
        </div>
      </div>
      <div class="ui three column grid">

  
      </div>
      <div class="ui three column grid">
      </div>
      </div>
    </>
  );
};

export default WomenTeam;
