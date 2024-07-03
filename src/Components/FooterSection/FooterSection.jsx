import React from "react";
import "./FooterSection.css";
import { xbot_logo } from "../../assets";
const FooterSection = () => {
  return (
    <div>
      <footer className="f-section">
        <div className="f-container">
          <div className="f-wrapper">
            <div className="f-right-section">
              <div className="f-right-section-container">
                <div className="f-right-desc">
                  <div className="f-right-logo">
                    <img src={xbot_logo} alt="" />
                  </div>
                  <div className="f-right-link">
                    <ul className="f-right-list">
                      <li>
                        <a href="" className="font-grot f-button_underline">
                          Features
                        </a>
                      </li>
                      <li>
                        <a href="" className="font-grot f-button_underline">
                          About
                        </a>
                      </li>
                      <li>
                        <a href="" className="font-grot f-button_underline">
                          Blog
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="f-right-social">
                    <ul>
                      <li>
                        <a href="">
                          <svg
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            class="w-24 h-24"
                          >
                            <g clip-path="url(#linkedin_svg__a)">
                              <path
                                d="M0 0v24h24V0H0Zm8 19H5V8h3v11ZM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764ZM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.397-2.586 7-2.777 7 2.476V19Z"
                                fill="#fff"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="linkedin_svg__a">
                                <rect
                                  width="24"
                                  height="24"
                                  rx="2"
                                  fill="#fff"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="f-right-term"></div>
              </div>
              <div className="f-term-section-container">
                <ul>
                  <li>
                    <a href="">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="">Terms & Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="f-left-section">
              <div className="f-left-dec">
                <h2>Stay in Touch</h2>
                <p className="text-grey">
                  Get regular updates about our new hires, technical and
                  business milestones, and ideas in brain–computer interface
                  technology.
                </p>
              </div>
              <form action="">
                {/* <input type="hidden" className="hidden" /> */}
                <div className="f-left-submit">
                  <div className="f-left-sub-desc">
                    <input type="email" placeholder="Enter email" required />
                  </div>
                  <button type="submit" className="f-left-button">SUBMIT
                   
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterSection;
