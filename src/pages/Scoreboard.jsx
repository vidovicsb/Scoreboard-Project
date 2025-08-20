import { Header } from "../components/Header";
import '../styles/Scoreboard.css';

const players = [
  { number: 1, name: "Player 1" },
  { number: 2, name: "Player 2" },
  { number: 3, name: "Player 3" },
  { number: 4, name: "Player 4" },
  { number: 5, name: "Player 5" },
  { number: 6, name: "Player 6" },
  { number: 7, name: "Player 7" },
  { number: 8, name: "Player 8" }
];

const playerRoster = players.map(player =>
  <li key={player.number} className="player-roster-row">
    <p className="player-number">
      {player.number}
    </p>
    <p className="player name">
      {player.name}
    </p>
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
          <p className="game-time-run">8:00</p>
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
          <p className="shotclock-time">30</p>
        </div>
        <div className="away-team-details">
          {playerRoster}
        </div>
      </div>
      <div className="time-out-left-container">
        <p className="home-tol">TOL 2</p>
        <p className="away-tol">TOL 2</p>
      </div>
    </>
  );
}