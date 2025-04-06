import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header bg-light text-dark">
      <div className="container d-flex justify-content-between align-items-center py-2">
        {/* Logo */}
        <Link to="/" className="text-decoration-none text-dark">
          <h2 className="m-0">PRITAM PAL</h2>
        </Link>

        {/* Toggle button for mobile */}
        <button
          className="btn d-md-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#mobileMenu"
          aria-controls="mobileMenu"
        >
          <i className="bi bi-list" style={{ fontSize: "1.5rem" }}></i>
        </button>

        {/* Desktop Nav */}
        <nav className="d-none d-md-block">
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
              <Link to="/todos" className="nav-link">
                Todo App
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

        {/* Mode Switch */}
        <div className="form-check form-switch d-none d-md-block">
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

      {/* Offcanvas Menu for Mobile */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="mobileMenu"
        aria-labelledby="mobileMenuLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="mobileMenuLabel">
            PRITAM PAL
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="/" className="nav-link" data-bs-dismiss="offcanvas">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className="nav-link"
                data-bs-dismiss="offcanvas"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/todos"
                className="nav-link"
                data-bs-dismiss="offcanvas"
              >
                Todo App
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/word-counter"
                className="nav-link"
                data-bs-dismiss="offcanvas"
              >
                Word Counter
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/courses"
                className="nav-link"
                data-bs-dismiss="offcanvas"
              >
                Courses
              </Link>
            </li>
            <li className="nav-item mt-3">
              <div className="form-check form-switch">
                <label className="form-check-label" htmlFor="modeCheckerMobile">
                  Switch Mode
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="modeCheckerMobile"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
