import React, { useState } from "react";
import "../styles/Rosters.css";
import { RosterRow } from "../components/RosterRow";

export function Rosters() {
  const [rows, setRows] = useState([
    { number: 1, name: "" },
    { number: 2, name: "" },
    { number: 3, name: "" },
    { number: 4, name: "" },
    { number: 5, name: "" },
  ]);

  const handleNumberChange = (index, e) => {
    setRows(r =>
      r.map((x, idx) => idx === index ? { ...x, number: e.target.value } : x)
    );
  };

  const handleNameChange = (index, e) => {
    setRows(r =>
      r.map((x, idx) => idx === index ? { ...x, name: e.target.value } : x)
    );
  };

  const addRow = () => {
    const nextNumber = rows.length + 1;
    setRows([...rows, { number: nextNumber, name: "" }]);
  };

  const removeRow = (index) => {
    setRows(rows.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="rosters-title">
        <h2>Enter the rosters</h2>
        <button onClick={addRow}>Add Player</button>
      </div>
      <div className="teams-container">
        <div className="home-team">
          Home Team
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
        <div className="away-team">
          Away Team
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
      </div>
    </>
  );
}
