// FeaturesItem.jsx

import React from "react";

const FeaturesItem = ({ title, description,imgs }) => {
  return (
    <li className="features-01__item">
      <div className="feature">
        <h3 className="feature__title">
          <div className="feature__icon">
          
              <img src={imgs} alt="" />
            
            
          </div>
          <span className="title-text--inner def-12 feature__title_text">
            {title}
          </span>
        </h3>
        <div className="feature__content">
          <span className="content-text feature__content_text content_box">
            <p>{description}</p>
          </span>
        </div>
      </div>
    </li>
  );
};

export default FeaturesItem;
