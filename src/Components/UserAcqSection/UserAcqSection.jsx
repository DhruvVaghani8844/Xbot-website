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
} from "../../assets/index.js";

const UserAcqSection = () => {
  return (
    <div className="userAcq-Section">
      <div className="xbot-container">
        <div className="U-heading">
          <h1 className="font-mono">Effortless User Acquisition</h1>
        </div>
        <div className="U-heading-p">
          <p className="font-grot">Now simplified</p>
        </div>

        <div className="U-contain-box">
          <div className="U-mainContain">
            <div className="U-container">
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
              <SwiperSlide><img src={social_logo1} alt="" /></SwiperSlide>
              <SwiperSlide><img src={social_logo2} alt="" /></SwiperSlide>
              <SwiperSlide><img src={social_logo3} alt="" /></SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAcqSection;
