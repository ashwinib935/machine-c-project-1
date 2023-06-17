import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
function Header() {
  const handleIsActive = ({ isActive }) => {
    return {
      color: isActive ? "red" : "",
      fontWeight: "600",
      fontSize: "18px",
      display: "inlineBlock",
      height: "50px",
      textDecoration: "none",
    };
  };
  return (
    <div className="header">
      <nav className="nav-links">
        <NavLink to="/" style={handleIsActive}>
          Home
        </NavLink>
        <NavLink to="/search" style={handleIsActive}>
          Search
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
