import React from "react";
import { Link } from "react-router-dom";
import "./NavBarStyles.css";

function NavBar() {
  return (
    <div>
      <nav>
        <ul>
          <Link to="/" className="navbar">
            <li>Home</li>
          </Link>
          <Link to="/Students" className="navbar">
            <li>Students</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
export default NavBar;
