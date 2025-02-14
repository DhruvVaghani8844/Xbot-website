// FeaturesSection.jsx

import React from "react";
import "./FeaturesSection.css";
import { featuresData } from "../../DataSection/featuresData/featuresData-d.js";
import FeaturesItem from "../../SubComponents/FeaturesItemSection/FeaturesItem.jsx";

const FeaturesSection = () => {
  return (
    <div className="feature-section">
      <div className="xbot-container ">
        <div className="F-heading">
          <h1 className="font-mono">Features</h1>
        </div>
        <div className="F-heading-p">
          <p className="font-grot">
            One Platform for All Your Favorite Features.
          </p>
        </div>
        <div className="F-container">
          <ul className="features-01__items">
            {featuresData.map((feature, index) => (
              <FeaturesItem
                key={index}
                title={feature.title}
                description={feature.description}
                imgs={feature.imgs}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
