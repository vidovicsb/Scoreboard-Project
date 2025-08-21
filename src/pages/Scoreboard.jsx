import { Header } from "../components/Header";
import '../styles/Scoreboard.css';

const players = [
  { number: 1, name: "Player 1 Szepes Aron" },
  { number: 2, name: "Player 2 Szepes Aron" },
  { number: 3, name: "Player 3 Szepes Aron" },
  { number: 4, name: "Player 4 Szepes Aron" },
  { number: 5, name: "Player 5 Szepes Aron" },
  { number: 6, name: "Player 6 Szepes Aron" },
  { number: 7, name: "Player 7 Szepes Aron" },
  { number: 8, name: "Player 8 Szepes Aron" }
];

const playerRoster = players.map(player =>
  <li key={player.number} className="player-roster-row">
    <span className="player-number">
      {player.number}
    </span>
    <span className="player-name">
      {player.name}
    </span>
  </li>
)

export function Scoreboard() {
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
          {playerRoster}
        </div>
        <div className="game-details">
          <p className="shotclock-time-stop">30</p>
        </div>
        <div className="away-team-details">
          {playerRoster}
        </div>
      </div>
      <div className="time-out-left-container">
        <p className="home-tol">TOL: 2</p>
        <p className="away-tol">TOL: 2</p>
      </div>
    </>
  );
}