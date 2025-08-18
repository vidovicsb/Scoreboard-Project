import React from "react";
import { RosterRow } from "./RosterRow";
import { useTeamRoster } from "../hooks/useTeamRoster";

export function TeamRoster({ teamName, teamColor = "blue" }) {
  const { rows, handleNumberChange, handleNameChange, addRow, removeRow } = useTeamRoster();

  return (
    <div className={`team ${teamColor}-team`}>
      <div className="team-header">
        <h3>{teamName}</h3>
        <button onClick={addRow}>Add Player</button>
      </div>
      <div className="roster-input-container">
        {rows.map((row, i) => (
          <RosterRow
            key={i}
            row={row}
            index={i}
            onNumberChange={handleNumberChange}
            onNameChange={handleNameChange}
            onRemove={() => removeRow(i)}
          />
        ))}
      </div>
    </div>
  );
}