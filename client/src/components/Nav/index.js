import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar text-dark navbar-expand-lg">
      <a className="navbar-brand" href="/">
        Google Books
      </a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/search">Search</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/saved">Saved</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
