import React, { useState } from "react";
import "./HeaderSection.css";
import { xbot_logo } from "../../assets/index.js";

const HeaderSection = ({ scrollToSection, refs }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  const handleNavLinkClick = (sectionRef) => {
    scrollToSection(sectionRef);
    closeMobileNav();
  };

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
              <a onClick={() => handleNavLinkClick(refs.featuresRef)}>
                Features
              </a>
              <a onClick={() => handleNavLinkClick(refs.aboutRef)}>About</a>
              <a href="#">Blog</a>
            </nav>
            <button className="site-button d-none d-sm-flex">
              Get Early Access
            </button>
            <div className="d-block d-sm-none">
              <section className="site-header_small">
                <button className="site-header_menuBtn">
                  <label
                    className={`hamburger ${isMobileNavOpen ? "open" : ""}`}
                  >
                    <input type="checkbox" />
                    <svg viewBox="0 0 32 32" onClick={toggleMobileNav}>
                      <path
                        className="line line-top-bottom"
                        d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                      ></path>
                      <path className="line" d="M7 16 27 16"></path>
                    </svg>
                  </label>
                </button>
              </section>
              <section
                className={`site-header_mobileNav ${
                  isMobileNavOpen ? "open" : ""
                }`}
              >
                <div className="xbot-container">
                  <nav className="site-header_mainMobileNav">
                    <ul>
                      <li>
                        <a href="#">Blog</a>
                      </li>
                      <li>
                        <a onClick={() => handleNavLinkClick(refs.aboutRef)}>
                          About
                        </a>
                      </li>
                      <li>
                        <a onClick={() => handleNavLinkClick(refs.featuresRef)}>
                          Features
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <nav className="site-header_mainMobileNav site-header_secondary">
                    <ul>
                      <li>
                        <a >Stay in Touch</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </section>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderSection;
