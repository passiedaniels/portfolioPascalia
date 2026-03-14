import React from "react";
import "../NavBar.css";
export default function NavBar() {
  return (
    <div className="Container">
      <div className="nav-container">
        <nav className="d-flex justify-content-between">
          <a href="/" title="Homepage" className="logo d-block">
            Pascalia A.
          </a>
          <ul>
            <li>
              <a href="/">Homepage</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/work">Work</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
