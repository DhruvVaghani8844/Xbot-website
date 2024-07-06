import React, { useRef, useState } from "react";
import "./UserAcq.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";

import {
  social_logo1,
  social_logo2,
  social_logo3,
  single_img
} from "../../assets/index.js";

const UserAcqSection = () => {
  return (
    <div className="userAcq-Section">
      <div className="xbot-container">
        <div className="U-heading">
          <h1 className="">Effortless User Acquisition</h1>
        </div>
        <div className="U-heading-p">
          <p className="font-grot">Now simplified</p>
        </div>

        <div className="U-contain-box">
          <div className="U-mainContain">
            <div className="U-wrapper">
             
              <div className="U-container">
                <h1>The benefits are endless</h1>
                <p>
                  Xbots is transforming the way businesses acquire new users by
                  connecting with customers where it matters most.
                </p>
                <p>
                  Leverage WhatsApp marketing with Xbots to potentially cut
                  Customer Acquisition Costs (CAC) by 50-75% compared to
                  traditional methods.
                </p>
              </div>
              <div className="U-wrapper-dec">
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
                      style={{ mixBlendMode: "normal"}}
                    >
                      <g transform="scale(8.53333,8.53333)">
                        <path d="M26.98047,5.99023c-0.2598,0.00774 -0.50638,0.11632 -0.6875,0.30273l-15.29297,15.29297l-6.29297,-6.29297c-0.25082,-0.26124 -0.62327,-0.36647 -0.97371,-0.27511c-0.35044,0.09136 -0.62411,0.36503 -0.71547,0.71547c-0.09136,0.35044 0.01388,0.72289 0.27511,0.97371l7,7c0.39053,0.39037 1.02353,0.39037 1.41406,0l16,-16c0.29576,-0.28749 0.38469,-0.72707 0.22393,-1.10691c-0.16075,-0.37985 -0.53821,-0.62204 -0.9505,-0.60988z" />
                      </g>
                    </g>
                  </svg>
                  <div className="U-wrapper-dec-title">
                    Up to 50% in savings
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
                  <div className="U-wrapper-dec-title">No hidden fees</div>
                </div>
              </div>
            </div>

            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper U-containImg"
            >
              <SwiperSlide>
                <img src={single_img} alt="" />
              </SwiperSlide>
              {/* <SwiperSlide>
                <img src={social_logo2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={social_logo3} alt="" />
              </SwiperSlide> */}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAcqSection;
