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
            <button className="site-button d-none d-sm-flex">
              {" "}
              Get Early Access
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
