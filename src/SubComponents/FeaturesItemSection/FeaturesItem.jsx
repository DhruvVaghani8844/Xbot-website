// FeaturesItem.jsx

import React from "react";

const FeaturesItem = ({ title, description }) => {
  return (
    <li className="features-01__item">
      <div className="feature">
        <h3 className="feature__title">
          <div className="feature__icon">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fillRule="evenodd">
                <circle
                  fill="#E9F1FF"
                  className="fill-bg-light"
                  cx="20"
                  cy="20"
                  r="20"
                ></circle>
                <path
                  fill="#4D61FC"
                  className="fill-main"
                  d="M28.686 14.008l-9 9.085-3.6-3.6-1.2 1.2 4.8 4.8L29.97 15.208z"
                ></path>
                <path
                  d="M25.086 16.208l-1.2-1.2-5.4 5.4 1.2 1.2 5.4-5.4zM11 20.693l4.8 4.8 1.2-1.2-4.8-4.8-1.2 1.2z"
                  fill="#00396B"
                  className="fill-secondary"
                  fillRule="nonzero"
                ></path>
              </g>
            </svg>
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
