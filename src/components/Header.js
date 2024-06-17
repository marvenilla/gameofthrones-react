import React from "react";
import "../general.css";
import "../style.css";

function Header() {
  return (
    <header className="header">
      <a href="/">
      <img
        className="logo"
        alt="Game of Thrones Quest Logo"
        src="/img/gameofthrones-logo.png"
      />
      </a>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a className="main-nav-link" href="/">
              About
            </a>
          </li>
          <li>
            <a className="main-nav-link nav-cta" href="/login">
              Sign In
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
