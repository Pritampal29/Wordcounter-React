import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header bg-light text-dark">
      <div className="container d-flex justify-content-between align-items-center">
        <Link to="/">
          <h2 className="m-0">PRITAM PAL</h2>
        </Link>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/word-counter" className="nav-link">
                Word Counter
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/courses" className="nav-link">
                Courses
              </Link>
            </li>
          </ul>
        </nav>
        <div className="form-check form-switch">
          <label style={{ marginTop: "4px" }} htmlFor="modeChecker">
            Switch Mode
          </label>
          <input
            className="form-check-input me-2"
            type="checkbox"
            role="switch"
            id="modeChecker"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
