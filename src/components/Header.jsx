import { NavLink } from "react-router-dom";
import './Header.css';

export function Header() {
  return (
    <>
      <div className="header-row">
        <NavLink to="/">
          <button className="header-roster-button">
            Roster
          </button>
        </NavLink>
        <NavLink to="/scoreboard">
          <button className="header-scoreboard-button">
            Scoreboard
          </button>
        </NavLink>
        <button className="header-settings-button">
          Settings
        </button>
      </div>
    </>
  );
}