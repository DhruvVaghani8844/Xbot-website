import React, { useRef, useState } from "react";
import "./UserAcq.css";

import { offersData } from "../../DataSection/UserAcqSection.d/UserAcqSection.d.js";

import { single_img } from "../../assets/index.js";

const UserAcqSection = () => {
  return (
    <div className="userAcq-Section">
      <div className="xbot-container">
        <div className="U-heading">
          {/* <h1 className="">Effortless User Acquisition</h1> */}
        </div>
        <div className="U-heading-p">
          {/* <p className="font-grot">Now simplified</p> */}
        </div>

        <div className="U-contain-box">
          <div className="U-mainContain">
            <div className="U-wrapper">
              <div className="U-container">
                <h1>Effortless User Acquisition. <br /> Now simplified</h1>
                <p>
                  Xbots is transforming the way businesses acquire new users by
                  connecting with customers where it matters most.
                </p>
                {/* <p>
                  Leverage WhatsApp marketing with Xbots to potentially cut
                  Customer Acquisition Costs (CAC) by 50-75% compared to
                  traditional methods.
                </p> */}
              </div>
              <div className="U-wrapper-items">
               
                {/* <div className="U-wrapper-dec">
                  <div className="U-wrapper-dec-svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width={100}
                      height={100}
                      viewBox="0,0,256,256"
                    >
                      <g
                        fill="#1F982F"
                        fillRule="nonzero"
                        stroke="#1F982F"
                        strokeWidth="2px"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeMiterlimit={10}
                        strokeDasharray=""
                        strokeDashoffset={0}
                        fontFamily="none"
                        fontWeight="none"
                        fontSize="none"
                        textAnchor="none"
                        style={{ mixBlendMode: "normal" }}
                      >
                        <g transform="scale(8.53333,8.53333)">
                          <path d="M26.98047,5.99023c-0.2598,0.00774 -0.50638,0.11632 -0.6875,0.30273l-15.29297,15.29297l-6.29297,-6.29297c-0.25082,-0.26124 -0.62327,-0.36647 -0.97371,-0.27511c-0.35044,0.09136 -0.62411,0.36503 -0.71547,0.71547c-0.09136,0.35044 0.01388,0.72289 0.27511,0.97371l7,7c0.39053,0.39037 1.02353,0.39037 1.41406,0l16,-16c0.29576,-0.28749 0.38469,-0.72707 0.22393,-1.10691c-0.16075,-0.37985 -0.53821,-0.62204 -0.9505,-0.60988z" />
                        </g>
                      </g>
                    </svg>
                    <div className="U-wrapper-dec-title">
                      Offers
                    </div>
                  </div>
                  <div className="U-wrapper-dec-svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width={100}
                      height={100}
                      viewBox="0,0,256,256"
                    >
                      <g
                        fill="#1F982F"
                        fillRule="nonzero"
                        stroke="#1F982F"
                        strokeWidth="2px"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeMiterlimit={10}
                        strokeDasharray=""
                        strokeDashoffset={0}
                        fontFamily="none"
                        fontWeight="none"
                        fontSize="none"
                        textAnchor="none"
                        style={{ mixBlendMode: "normal" }}
                      >
                        <g transform="scale(8.53333,8.53333)">
                          <path d="M26.98047,5.99023c-0.2598,0.00774 -0.50638,0.11632 -0.6875,0.30273l-15.29297,15.29297l-6.29297,-6.29297c-0.25082,-0.26124 -0.62327,-0.36647 -0.97371,-0.27511c-0.35044,0.09136 -0.62411,0.36503 -0.71547,0.71547c-0.09136,0.35044 0.01388,0.72289 0.27511,0.97371l7,7c0.39053,0.39037 1.02353,0.39037 1.41406,0l16,-16c0.29576,-0.28749 0.38469,-0.72707 0.22393,-1.10691c-0.16075,-0.37985 -0.53821,-0.62204 -0.9505,-0.60988z" />
                        </g>
                      </g>
                    </svg>
                    <div className="U-wrapper-dec-title">Segmentation</div>
                  </div>
                  <div className="U-wrapper-dec-svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width={100}
                      height={100}
                      viewBox="0,0,256,256"
                    >
                      <g
                        fill="#1F982F"
                        fillRule="nonzero"
                        stroke="#1F982F"
                        strokeWidth="2px"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeMiterlimit={10}
                        strokeDasharray=""
                        strokeDashoffset={0}
                        fontFamily="none"
                        fontWeight="none"
                        fontSize="none"
                        textAnchor="none"
                        style={{ mixBlendMode: "normal" }}
                      >
                        <g transform="scale(8.53333,8.53333)">
                          <path d="M26.98047,5.99023c-0.2598,0.00774 -0.50638,0.11632 -0.6875,0.30273l-15.29297,15.29297l-6.29297,-6.29297c-0.25082,-0.26124 -0.62327,-0.36647 -0.97371,-0.27511c-0.35044,0.09136 -0.62411,0.36503 -0.71547,0.71547c-0.09136,0.35044 0.01388,0.72289 0.27511,0.97371l7,7c0.39053,0.39037 1.02353,0.39037 1.41406,0l16,-16c0.29576,-0.28749 0.38469,-0.72707 0.22393,-1.10691c-0.16075,-0.37985 -0.53821,-0.62204 -0.9505,-0.60988z" />
                        </g>
                      </g>
                    </svg>
                    <div className="U-wrapper-dec-title">A/B Testing</div>
                  </div>
                  <div className="U-wrapper-dec-svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width={100}
                      height={100}
                      viewBox="0,0,256,256"
                    >
                      <g
                        fill="#1F982F"
                        fillRule="nonzero"
                        stroke="#1F982F"
                        strokeWidth="2px"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeMiterlimit={10}
                        strokeDasharray=""
                        strokeDashoffset={0}
                        fontFamily="none"
                        fontWeight="none"
                        fontSize="none"
                        textAnchor="none"
                        style={{ mixBlendMode: "normal" }}
                      >
                        <g transform="scale(8.53333,8.53333)">
                          <path d="M26.98047,5.99023c-0.2598,0.00774 -0.50638,0.11632 -0.6875,0.30273l-15.29297,15.29297l-6.29297,-6.29297c-0.25082,-0.26124 -0.62327,-0.36647 -0.97371,-0.27511c-0.35044,0.09136 -0.62411,0.36503 -0.71547,0.71547c-0.09136,0.35044 0.01388,0.72289 0.27511,0.97371l7,7c0.39053,0.39037 1.02353,0.39037 1.41406,0l16,-16c0.29576,-0.28749 0.38469,-0.72707 0.22393,-1.10691c-0.16075,-0.37985 -0.53821,-0.62204 -0.9505,-0.60988z" />
                        </g>
                      </g>
                    </svg>
                    <div className="U-wrapper-dec-title">Events</div>
                  </div>
                  <div className="U-wrapper-dec-svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width={100}
                      height={100}
                      viewBox="0,0,256,256"
                    >
                      <g
                        fill="#1F982F"
                        fillRule="nonzero"
                        stroke="#1F982F"
                        strokeWidth="2px"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeMiterlimit={10}
                        strokeDasharray=""
                        strokeDashoffset={0}
                        fontFamily="none"
                        fontWeight="none"
                        fontSize="none"
                        textAnchor="none"
                        style={{ mixBlendMode: "normal" }}
                      >
                        <g transform="scale(8.53333,8.53333)">
                          <path d="M26.98047,5.99023c-0.2598,0.00774 -0.50638,0.11632 -0.6875,0.30273l-15.29297,15.29297l-6.29297,-6.29297c-0.25082,-0.26124 -0.62327,-0.36647 -0.97371,-0.27511c-0.35044,0.09136 -0.62411,0.36503 -0.71547,0.71547c-0.09136,0.35044 0.01388,0.72289 0.27511,0.97371l7,7c0.39053,0.39037 1.02353,0.39037 1.41406,0l16,-16c0.29576,-0.28749 0.38469,-0.72707 0.22393,-1.10691c-0.16075,-0.37985 -0.53821,-0.62204 -0.9505,-0.60988z" />
                        </g>
                      </g>
                    </svg>
                    <div className="U-wrapper-dec-title">Battle Passes</div>
                  </div>
                  <div className="U-wrapper-dec-svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width={100}
                      height={100}
                      viewBox="0,0,256,256"
                    >
                      <g
                        fill="#1F982F"
                        fillRule="nonzero"
                        stroke="#1F982F"
                        strokeWidth="2px"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeMiterlimit={10}
                        strokeDasharray=""
                        strokeDashoffset={0}
                        fontFamily="none"
                        fontWeight="none"
                        fontSize="none"
                        textAnchor="none"
                        style={{ mixBlendMode: "normal" }}
                      >
                        <g transform="scale(8.53333,8.53333)">
                          <path d="M26.98047,5.99023c-0.2598,0.00774 -0.50638,0.11632 -0.6875,0.30273l-15.29297,15.29297l-6.29297,-6.29297c-0.25082,-0.26124 -0.62327,-0.36647 -0.97371,-0.27511c-0.35044,0.09136 -0.62411,0.36503 -0.71547,0.71547c-0.09136,0.35044 0.01388,0.72289 0.27511,0.97371l7,7c0.39053,0.39037 1.02353,0.39037 1.41406,0l16,-16c0.29576,-0.28749 0.38469,-0.72707 0.22393,-1.10691c-0.16075,-0.37985 -0.53821,-0.62204 -0.9505,-0.60988z" />
                        </g>
                      </g>
                    </svg>
                    <div className="U-wrapper-dec-title">Notifications</div>
                  </div>
                </div> */}
                <div className="U-wrapper-dec">
                  {offersData.map((offer, index) => (
                    <div key={index} className="U-wrapper-dec-svg">
                      <div dangerouslySetInnerHTML={{ __html: offer.svg }} />
                      <div className="U-wrapper-dec-title">{offer.title}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="U-containImg">
              <img src={single_img} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="user-backdrop-section">
        <ul className="user-backdrop">
          <li className="user-backdrop-dec">
            Array is 1/5th the thickness of a human hair.
          </li>
          <li className="user-backdrop-dec">
            The slit for insertion is less than 1mm thickness.
          </li>
          <li className="user-backdrop-dec">
            Array has 600x greater electrode density than standard cortical
            arrays.
          </li>
          <li className="user-backdrop-dec">
            Slit insertion method will deliver more than 50 electrodes per
            second.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserAcqSection;
