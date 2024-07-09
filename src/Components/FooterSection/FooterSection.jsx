import React from "react";
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
                      <a href={social.href} className="f-right-social-logos">
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
                {termLinks.map((term, index) => (
                  <li key={index}>
                    <a
                      href={term.href}
                      className="f-nav-links text-grey f-nav-link-tag"
                    >
                      {term.label}
                    </a>
                  </li>
                ))}
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
            </div>
            {/* <form action="" className="f-left-section-form">
              <div className="f-left-form-dec">
                <div className="f-left-form-input w-full">
                  <input
                    className="h-full w-full font-mono text-grey border-grey text-white"
                    placeholder="Enter email"
                    type="email"
                    required
                  />
                </div>
                <button className="f-left-form-button">
                  SUBMIT
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
              </div>
            </form> */}
            <div className="text-grey f-left-term">
              <ul className="text-grey font-mono">
                {termLinks.map((term, index) => (
                  <li key={index}>
                    <a
                      href={term.href}
                      className="f-nav-links text-grey f-nav-link-tag"
                    >
                      {term.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
