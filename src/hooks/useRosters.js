import { useCallback, useEffect, useState } from "react";

export function useRosters() {
  const [homeTeam, setHomeTeam] = useState(
    Array.from({ length: 14 }, (_, i) => ({ number: i + 1, name: "" }))
  );
  
  const [awayTeam, setAwayTeam] = useState(
    Array.from({ length: 14 }, (_, i) => ({ number: i + 1, name: "" }))
  );

  const [isClearing, setIsClearing] = useState(false);
  const [hasRosters, setHasRosters] = useState(false);

  const checkRosters = useCallback(async () => {
    try {
      const res = await fetch('http://localhost:3001/rosters');
      if (!res.ok) throw new Error(`Failed: ${res.status}`);
      const data = await res.json();
      setHasRosters(data.length > 0);
    } catch (error) {
      console.error("Error checking rosters:", error);
      setHasRosters(false);
    }
  }, []);

  useEffect(() => {
    checkRosters();
  }, [checkRosters]);

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
      checkRosters();
      alert("Rosters submitted successfully!");
      
      // Clear forms after successful submission
      setHomeTeam(Array.from({ length: 14 }, (_, i) => ({ number: i + 1, name: "" })));
      setAwayTeam(Array.from({ length: 14 }, (_, i) => ({ number: i + 1, name: "" })));
      
    } catch (error) {
      console.error('Error submitting rosters:', error);
      alert('Failed to submit rosters. Please try again.');
    }
  };

  const clearAllRosters = useCallback(async () => {
    const confirmed = window.confirm(
      "This will delete ALL rosters. Cannot be undone. Continue?"
    )
    if (!confirmed) return false;

    setIsClearing(true);
    try {
      const listRes = await fetch('http://localhost:3001/rosters');
      if (!listRes.ok) throw new Error(`List failed: ${listRes.status}`);
      const items = await listRes.json();

      await Promise.all(
        items.map(item =>
          fetch(`http://localhost:3001/rosters/${item.id}`, { method: "DELETE" })
        )
      );

      setHomeTeam(Array.from({ length: 14 }, (_, i) => ({ number: i + 1, name: "" })));
      setHomeTeam(Array.from({ length: 14 }, (_, i) => ({ number: i + 1, name: "" })));
      await checkRosters();
      alert("All rosters cleared.");
      return true;
    } catch (error) {
      console.error("Error clearing rosters:", error);
      alert("Failed to clear rosters. Please try again!");
      return false;
    } finally {
      setIsClearing(false);
    }
  }, [checkRosters]);

  return {
    homeTeam,
    awayTeam,
    updatePlayer,
    addPlayer,
    removePlayer,
    submitRosters,
    clearAllRosters,
    isClearing,
    hasRosters,
    checkRosters
  };
}
