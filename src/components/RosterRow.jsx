import "./RosterRow.css";

export function RosterRow({ player, onNumberChange, onNameChange, onRemove }) {
  return (
    <div className="roster-row">
      <input
        className="number-input"
        placeholder="Number"
        value={player.number || ""}
        onChange={onNumberChange}
      />
      <input
        className="name-input"
        type="text"
        placeholder="Name"
        value={player.name || ""}
        onChange={onNameChange}
      />
      <button className="remove-button" onClick={onRemove}>
        X
      </button>
    </div>
  );
}
