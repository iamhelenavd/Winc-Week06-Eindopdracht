import React from "react";
import { Link } from "react-router-dom";
import "./NavBarStyles.css";

function NavBar() {
  return (
    <div className="App">
      <nav className="navbar">
        <ul className="nav-links">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/Students">
            <li>Students</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
export default NavBar;
