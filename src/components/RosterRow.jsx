import './RosterRow.css';

export function RosterRow({ row, index, onNumberChange, onNameChange, onRemove }) {
  return (
    <div className="roster-row">
      <input
        placeholder="Number"
        value={row.number || ""}
        onChange={(e) => onNumberChange(index, e)}
      />
      <input
        type="text"
        placeholder="Name"
        value={row.name || ""}
        onChange={(e) => onNameChange(index, e)}
      />
      <button className="remove-button" onClick={onRemove}>X</button>
    </div>
  )
}