import React, { Component } from "react";

import "./home-contents.css";

class HomeContents extends Component {
  render() {
    return (
      <>
        <div className="home-contents-container">
          <div className="home-wrapper">
            <div className="home-info-img-right">
              <div className="home-info-text">
                <h1>Visualise it by seeing graphs!</h1>
                <p>
                  Get all of the indepth information you need by simply looking
                  at the graphs!
                </p>
              </div>
              <div className="home-info-img">
                <img
                  src={process.env.PUBLIC_URL + "/images/metrics-home.svg"}
                ></img>
              </div>
            </div>
            <div className="home-info-img-left">
              <div className="home-info-text">
                <h1>We are Safe and Trusted!</h1>
                <p>
                  Millions have trusted our most up to date data and have loved
                  it!
                </p>
              </div>
              <div className="home-info-img">
                <img
                  src={process.env.PUBLIC_URL + "/images/secure-home.svg"}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default HomeContents;
