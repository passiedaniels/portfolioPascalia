import React from "react";
import "../NavBar.css";
export default function NavBar() {
  return (
    <div className="Container">
      <div className="nav-container">
        <nav className="d-flex justify-content-between">
          <a href="/" title="Logo" className="logo d-block">
            Pascalia A.
          </a>
          <ul>
            <li>
              <a href="/" className="navs" title="Home page">
                Homepage
              </a>
            </li>
            <li>
              <a href="/about" className="navs" title="About page">
                About
              </a>
            </li>
            <li>
              <a href="/work" className="navs" title="Work page">
                Work
              </a>
            </li>
            <li>
              <a href="/contact" className="navs" title="Contact page">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
