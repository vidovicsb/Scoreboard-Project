import React from "react";
import "../styles/Rosters.css";
import { TeamRoster } from "../components/TeamRoster";
import { useRosters } from "../hooks/useRosters";

export function Rosters() {
  const {
    homeTeam,
    awayTeam,
    updatePlayer,
    addPlayer,
    removePlayer,
    submitRosters,
    clearAllRosters,
    isClearing,
    hasRosters,
  } = useRosters();

  return (
    <>
      <div className="rosters-title">
        <h2>Enter the rosters</h2>
      </div>
      <div className="teams-container">
        <TeamRoster
          teamName="Home Team"
          teamColor="home"
          players={homeTeam}
          onPlayerChange={(index, field, value) =>
            updatePlayer("home", index, field, value)
          }
          onAddPlayer={() => addPlayer("home")}
          onRemovePlayer={(index) => removePlayer("home", index)}
        />
        <TeamRoster
          teamName="Away Team"
          teamColor="away"
          players={awayTeam}
          onPlayerChange={(index, field, value) =>
            updatePlayer("away", index, field, value)
          }
          onAddPlayer={() => addPlayer("away")}
          onRemovePlayer={(index) => removePlayer("away", index)}
        />
      </div>
      <div className="submit-all-container">
        <button className="submit-all-button" onClick={submitRosters}>
          Submit All Rosters
        </button>
        <button
          className="clear-all-button"
          onClick={clearAllRosters}
          disabled={isClearing || !hasRosters}
        >
          {isClearing ? "Clearing..." : "Clear All Rosters"}
        </button>
      </div>
    </>
  );
}
