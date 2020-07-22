import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBarStyles.css";

function NavBar() {
  return (
    <div>
      <NavLink to="/" exact={true} className="navbar">
        Home
      </NavLink>
      <NavLink to="/Students" className="navbar">
        Students
      </NavLink>
    </div>
  );
}
export default NavBar;
