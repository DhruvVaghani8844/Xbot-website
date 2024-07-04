import React from "react";
import "./HeaderSection.css";
import { xbot_logo } from "../../assets/index.js";

const HeaderSection = () => {
  return (
    <div className="xbot-container">
      <div className="site-header_placeholder"></div>
      <header className="site-header">
        <div className="xbot-container">
          <div className="site-header_foreground">
            <div className="site-header_logo">
              <a href="/" className="site-header_logoLink">
                <img src={xbot_logo} alt="" />
              </a>
            </div>
            <nav className="site_header-mainNav d-none d-sm-flex">
              <a href="">Features</a>
              <a href="">About</a>
              <a href="">Blog</a>
            </nav>
            {/* <button className="site-button d-none d-sm-flex">
              {" "}
              Get Early Access
            </button> */}
            <button className="site-button d-none d-sm-flex">
              Get Early Access
              <section className="centered-container">
                <a className="link link--arrowed">
                  <svg
                    className="arrow-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width={22}
                    height={22}
                    viewBox="0 0 32 32"
                  >
                    <g
                      fill="none"
                      stroke="#fff"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                      strokeMiterlimit={10}
                    >
                      <circle
                        className="arrow-icon--circle"
                        cx={16}
                        cy={16}
                        r="15.12"
                      />
                      <path
                        className="arrow-icon--arrow"
                        d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"
                      />
                    </g>
                  </svg>
                </a>
              </section>
            </button>
            <div className="d-block d-sm-none">
              <section className="site-header_small">
                <button className="site-header_menuBtn">Menu</button>
              </section>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderSection;
