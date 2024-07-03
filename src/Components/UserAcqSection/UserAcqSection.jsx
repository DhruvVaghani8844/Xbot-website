import React from "react";
import "./UserAcq.css";

import { social_logo } from "../../assets/index.js";

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
            <div className="U-containe">
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
            <div className="U-containImg">
              <img src={social_logo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAcqSection;
