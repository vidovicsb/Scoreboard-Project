import React from "react";
import { RosterRow } from "./RosterRow";
import "./TeamRoster.css";

export function TeamRoster({
  teamName,
  teamColor,
  players,
  onPlayerChange,
  onAddPlayer,
  onRemovePlayer,
}) {
  return (
    <div className={`team ${teamColor}-team`}>
      <div className="team-header">
        <h3>{teamName}</h3>
        <button className="add-player-button" onClick={onAddPlayer}>
          Add Player
        </button>
      </div>
      <div className="roster-input-container">
        {players.map((player, i) => (
          <RosterRow
            key={i}
            player={player}
            index={i}
            onNumberChange={(e) => onPlayerChange(i, "number", e.target.value)}
            onNameChange={(e) => onPlayerChange(i, "name", e.target.value)}
            onRemove={() => onRemovePlayer(i)}
          />
        ))}
      </div>
    </div>
  );
}
