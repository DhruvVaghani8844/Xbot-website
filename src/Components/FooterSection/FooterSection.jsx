// FooterSection.js

import React from "react";
import { Link } from "react-router-dom";
import "./FooterSection.css";
import {
  logoSvg,
  navLinks,
  socialLinks,
  termLinks,
} from "../../DataSection/FooterSection.d/FooterSection.d";

const FooterSection = ({ scrollToSection, refs }) => {
  return (
    <footer className="f-section text-white">
      <div className="f-container">
        <div className="f-footer-wrapper">
          {/* Right Section */}
          <div className="f-right-section">
            <div className="f-right-dec">
              <div className="f-right-logo">
                <div className="f-right-logo-container">
                  <a href="/" className="h-fit">
                    <div
                      className="w-140"
                      dangerouslySetInnerHTML={{ __html: logoSvg }}
                    />
                  </a>
                  <div className="hidden">
                    <ul>
                      {socialLinks.map((social, index) => (
                        <li key={index}>
                          <a href={social.href}>
                            <div
                              className="w-24 h-24"
                              dangerouslySetInnerHTML={{ __html: social.svg }}
                            />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="f-right-nav-link">
                <div className="w-fit">
                  <ul className="f-right-link">
                    {navLinks.map((link, index) => (
                      <li className="w-fit" key={index}>
                        <a
                          onClick={() => scrollToSection(refs[link.ref])}
                          className="text-grey button_underline f-nav-links"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="f-right-social-link">
                <ul className="f-right-social-logo">
                  {socialLinks.map((social, index) => (
                    <li key={index}>
                      <a
                        href={social.href}
                        target="_blank"
                        className="f-right-social-logos"
                      >
                        <div
                          className="w-24 h-24"
                          dangerouslySetInnerHTML={{ __html: social.svg }}
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="f-right-term text-grey">
              <ul className="text-grey right-term-container">
                <li>
                  <Link
                    to="/privacy-policy"
                    className="f-nav-links text-grey f-nav-link-tag"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <a className="f-nav-links text-grey f-nav-link-tag">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* left Section */}

          <div className="f-left-section border-grey">
            <div className="mb-15">
              <h2 className="f-left-decription">Stay in Touch</h2>
              <p className="text-grey f-left-decription-p">
                Expand Your Customer Base, Boost Sales, Reconnect with
                Customers, Recover Abandoned Carts, and More – All on WhatsApp.
              </p>
              <a href="mailto:hello@xbots.tech" className="text-grey">
                hello@xbots.tech
              </a>
            </div>

            <div className="text-grey f-left-term">
              <ul className="text-grey font-mono">
                <li>
                  <Link
                    to="/privacy-policy"
                    className="f-nav-links text-grey f-nav-link-tag"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <a  className="f-nav-links text-grey f-nav-link-tag">
                    {" "}
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
