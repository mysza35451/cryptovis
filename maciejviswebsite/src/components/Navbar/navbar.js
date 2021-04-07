import React, { Component } from "react";

import "./navbar.css";

class Navbar extends Component {
  render() {
    return (
      <>
        <header>
          <h1 className="logo">
            <img
              className="nav-logo"
              src={process.env.PUBLIC_URL + "/images/logo.png"}
            ></img>
          </h1>
          <input type="checkbox" id="nav-toggle" className="nav-toggle" />
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <label for="nav-toggle" className="nav-toggle-label">
            <span></span>
          </label>
        </header>
      </>
    );
  }
}

export default Navbar;
