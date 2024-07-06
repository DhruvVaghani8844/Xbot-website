import React from "react";
import "./AboutSection.css";

import About_logo from "../../assets/About_logos/about.png";

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="userAcq-Section">
        <div className="xbot-container">
          <div className="U-heading">
            <h1 className="font-mono">About Us</h1>
          </div>
          <br />

          <div className="U-contain-box">
            <div className="U-mainContain">
              <div className="U-containImg about-section-img">
                <img src={About_logo} alt="" />
              </div>
              <div className="U-containe about-container">
                <p>
                  When the brain processes information or initiates an action,
                  it generates electrical signals. Our thin film technology can
                  capture these signals at micron scale, providing an
                  unprecedented view into the brain’s activity. Think of the
                  leap from standard television feeds to high-definition.
                </p>
                <p>
                  When the brain processes information or initiates an action,
                  it generates electrical signals. Our thin film technology can
                  capture these signals at micron scale, providing an
                  unprecedented view into the brain’s activity. Think of the
                  leap from standard television feeds to high-definition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
