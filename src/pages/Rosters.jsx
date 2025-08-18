import React from "react";
import "../styles/Rosters.css";
import { TeamRoster } from "../components/TeamRoster";

export function Rosters() {
  return (
    <>
      <div className="rosters-title">
        <h2>Enter the rosters</h2>
      </div>
      <div className="teams-container">
        <TeamRoster teamName="Home Team" teamColor="home" />
        <TeamRoster teamName="Away Team" teamColor="away" />
      </div>
    </>
  )
}