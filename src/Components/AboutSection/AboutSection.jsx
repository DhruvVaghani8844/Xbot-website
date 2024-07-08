import React from "react";
import "./AboutSection.css";

import About_logo from "../../assets/About_logos/about.png";

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="userAcq-Section">
        <div className="xbot-container">
          <div className="U-heading about-headings">
            <h1 className="font-mono">About Us</h1>
          </div>
          <br />

          <div className="U-contain-box">
            <div className="about-mainContainer">
              <div className="about-section-img">
                <img src={About_logo} alt="" />
              </div>
              <div className="U-containe about-container">
                <p>
                  Xbots, your ultimate WhatsApp marketing platform designed to
                  generate more leads, reach your customers faster, and drive
                  tremendous growth for your business.
                </p>
                <p>
                  At Xbots, we're not just limited to providing marketing
                  services. Our platform empowers your business to run
                  autonomously, leveraging advanced artificial intelligence to
                  simplify operations and reduce human effort. We are dedicated
                  to delivering the benefits of automation and AI in the
                  simplest, most effective way possible.
                </p>
                <p>We are here to simplify your business and your life.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
