import { useState } from "react";

export function useTeamRoster(initialSize = 14) {
  const [rows, setRows] = useState(
    Array.from({ length: initialSize }, (_, i) => ({
      number: i + 1,
      name: "",
    }))
  );

  const handleNumberChange = (index, e) => {
    setRows((r) =>
      r.map((x, idx) => (idx === index ? { ...x, number: e.target.value } : x))
    );
  };

  const handleNameChange = (index, e) => {
    setRows((r) =>
      r.map((x, idx) => (idx === index ? { ...x, name: e.target.value } : x))
    );
  };

  const addRow = () => {
    const nextNumber = rows.length + 1;
    setRows([...rows, { number: nextNumber, name: "" }]);
  };

  const removeRow = (index) => {
    setRows(rows.filter((_, i) => i !== index));
  };

  return {
    rows,
    handleNumberChange,
    handleNameChange,
    addRow,
    removeRow,
  };
}
