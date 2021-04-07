import React, { Component } from "react";

import "./hero.css";

class Hero extends Component {
  render() {
    return (
      <>
        <div className="hero-container">
          <video autoPlay muted loop id="hero-video">
            <source
              src={process.env.PUBLIC_URL + "/images/background.mp4"}
              type="video/mp4"
            />
          </video>
          <div className="hero-text">
            <h1>Explore the crypto prices with Wallet</h1>
            <p>Compare the most up to date crypto-currencies </p>
            <button id="login-button">Find Out More!</button>
          </div>
        </div>
      </>
    );
  }
}

export default Hero;
