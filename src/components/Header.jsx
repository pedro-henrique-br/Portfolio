import React from "react";
import "./header.css";
import MenuIcon from "../../public/menu-icon.png"
import CloseIcon from "../../public/close-icon.png"

const Header = () => {
  return (
    <header className="header">
      <nav className="nav-container">
        <a href="#" className="nav-logo">
          Pedro Barbosa
        </a>

        <div className="nav-menu">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Hire Me
              </a>
            </li>
          </ul>
          <div className="nav-remove">
            <img src={CloseIcon}></img>
          </div>
          </div>
          <div className="nav-toggle">
            <img src={MenuIcon}></img>
          </div>
      </nav>
    </header>
  );
};

export default Header
