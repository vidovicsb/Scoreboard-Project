import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { useRosters } from "../hooks/useRosters";
import '../styles/Scoreboard.css';

// const players = [
//   { number: 1, name: "Player 1 Szepes Aron" },
//   { number: 2, name: "Player 2 Szepes Aron" },
//   { number: 3, name: "Player 3 Szepes Aron" },
//   { number: 4, name: "Player 4 Szepes Aron" },
//   { number: 5, name: "Player 5 Szepes Aron" },
//   { number: 6, name: "Player 6 Szepes Aron" },
//   { number: 7, name: "Player 7 Szepes Aron" },
//   { number: 8, name: "Player 8 Szepes Aron" }
// ];

// const playerRoster = players.map(player =>
//   <li key={player.number} className="player-roster-row">
//     <span className="player-number">
//       {player.number}
//     </span>
//     <span className="player-name">
//       {player.name}
//     </span>
//   </li>
// )

export function Scoreboard() {

  const { getPlayers } = useRosters();

  const [homeRoster, setHomeRoster] = useState([]);
  const [awayRoster, setAwayRoster] = useState([]);

  useEffect(() => {
    const fetchRosters = async () => {
      const data = await getPlayers();

      if (data && data.length > 0) {
        const homeTeam = data.find(team => team.teamName === "Home Team");
        const awayTeam = data.find(team => team.teamName === "Away Team");

        if (homeTeam) setHomeRoster(homeTeam.players);
        if (awayTeam) setAwayRoster(awayTeam.players);
      }
    };
    fetchRosters();
  }, [])

  const getExclusions = (numberOfExc) => {
    if (numberOfExc === 0) {
      return <div className="exclusion-points"></div>
    }
    else if (numberOfExc > 0 && numberOfExc < 3) {
      return (
        <div className="exclusion-points">
          {Array.from({ length: numberOfExc }, (_, i) => (
            <div key={i}>●</div>
          ))}
        </div>
      )
    }
    else if (numberOfExc === 3) {
      return (
        <div className="rolled">
          <div className="rolled-exclusion-points">
            {Array.from({ length: numberOfExc - 1 }, (_, i) => (
              <div key={i}>●</div>
            ))}
          </div>
          <div className="rolled-last-exclusion">
            <div key={3}>●</div>
          </div>
        </div>
      )
    }

  }

  const renderRoster = (roster) =>
    roster.map((player) => (
      <div key={player.number} className="player-roster-row">
        <div className="player-name-number">
          <div className="player-number">
            {player.number}
          </div>
          <div className="player-name">
            {player.name}
          </div>
        </div>
        <div className="player-exclusions">
          {/* <div className="exclusion-points">{player.numOfExclusions === 0 ? "" : }</div> */}
          {getExclusions(player.numOfExclusions)}
        </div>
        <div className="player-goals">
          {player.goalsScored === 0 ? "" : player.goalsScored}
        </div>
      </div>
    ))

  const scrbrdHomeRoster = renderRoster(homeRoster);
  const scrbrdAwayRoster = renderRoster(awayRoster);

  return (
    <>
      <Header />

      <div className="main-row">
        <div className="home-team">
          <p className="home-team-name">Home Team</p>
          <p className="home-team-score">0</p>
        </div>
        <div className="game-time-container">
          <p className="game-time-stop">8:00</p>
          <p className="quarter">Quarter 1</p>
        </div>
        <div className="away-team">
          <p className="away-team-name">Away Team</p>
          <p className="away-team-score">0</p>
        </div>
      </div>
      <div className="details-row">
        <div className="home-team-details">
          {scrbrdHomeRoster}
        </div>
        <div className="game-details">
          <p className="shotclock-time-stop">30</p>
        </div>
        <div className="away-team-details">
          {scrbrdAwayRoster}
        </div>
      </div>
      <div className="time-out-left-container">
        <p className="home-tol">TOL: 2</p>
        <p className="away-tol">TOL: 2</p>
      </div>

    </>
  );
}