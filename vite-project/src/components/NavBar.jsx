import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <ul className="unordered-list">
        <Link to="/tickTacToe" className="list-item">
          Tick Tack Toe
        </Link>
        <Link to="/" className="list-item">
          Todo App
        </Link>
        <Link to="/auth" className="list-item">
          Auth Component
        </Link>
        <Link to="/codestructure" className="list-item">
          VS code structure
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
