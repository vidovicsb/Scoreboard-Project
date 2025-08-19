import { useState } from "react";

export function useRosters() {
  const [homeTeam, setHomeTeam] = useState(
    Array.from({ length: 14 }, (_, i) => ({ number: i + 1, name: "" }))
  );
  
  const [awayTeam, setAwayTeam] = useState(
    Array.from({ length: 14 }, (_, i) => ({ number: i + 1, name: "" }))
  );

  const updatePlayer = (team, index, field, value) => {
    const setTeam = team === 'home' ? setHomeTeam : setAwayTeam;
    const currentTeam = team === 'home' ? homeTeam : awayTeam;
    
    setTeam(currentTeam.map((player, i) => 
      i === index ? { ...player, [field]: value } : player
    ));
  };

  const addPlayer = (team) => {
    const setTeam = team === 'home' ? setHomeTeam : setAwayTeam;
    const currentTeam = team === 'home' ? homeTeam : awayTeam;
    
    setTeam([...currentTeam, { number: currentTeam.length + 1, name: "" }]);
  };

  const removePlayer = (team, index) => {
    const setTeam = team === 'home' ? setHomeTeam : setAwayTeam;
    const currentTeam = team === 'home' ? homeTeam : awayTeam;
    
    setTeam(currentTeam.filter((_, i) => i !== index));
  };

  const submitRosters = async () => {
    const homePlayers = homeTeam.filter(player => player.name.trim());
    const awayPlayers = awayTeam.filter(player => player.name.trim());

    if (homePlayers.length === 0 || awayPlayers.length === 0) {
      alert("Please enter at least one player name for both teams.");
      return;
    }

    try {
      const promises = [];
      
      if (homePlayers.length > 0) {
        promises.push(
          fetch('http://localhost:3001/rosters', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              teamName: "Home Team",
              players: homePlayers
            })
          })
        );
      }

      if (awayPlayers.length > 0) {
        promises.push(
          fetch('http://localhost:3001/rosters', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              teamName: "Away Team",
              players: awayPlayers
            })
          })
        );
      }

      await Promise.all(promises);
      alert("Rosters submitted successfully!");
      
      // Clear forms after successful submission
      setHomeTeam(Array.from({ length: 14 }, (_, i) => ({ number: i + 1, name: "" })));
      setAwayTeam(Array.from({ length: 14 }, (_, i) => ({ number: i + 1, name: "" })));
      
    } catch (error) {
      console.error('Error submitting rosters:', error);
      alert('Failed to submit rosters. Please try again.');
    }
  };

  return {
    homeTeam,
    awayTeam,
    updatePlayer,
    addPlayer,
    removePlayer,
    submitRosters
  };
}
