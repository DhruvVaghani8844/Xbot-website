import React, { useRef, useEffect, useCallback } from "react";
import "./HeroSection.css";

// Componets
import HeroSVG from "../../SubComponents/HeroSection/HeroSVG.jsx";

const HeroSection = () => {
  const requestRef = useRef(null);

  const handleMouseMove = useCallback((event) => {
    const { clientX, clientY } = event;
    const svgElement = document.querySelector(".xbot-outline_outline__pwT8v");
    const boundingRect = svgElement.getBoundingClientRect();
    const offsetX = clientX - boundingRect.left;
    const offsetY = clientY - boundingRect.top;

    const masks = document.querySelectorAll(
      ".xbot-outline_mouseMask__7FiGB, .xbot-outline_mouseMask_7FiGB"
    );

    masks.forEach((mask) => {
      if (mask) {
        const maskRect = mask.getBoundingClientRect();
        const maskOffsetX = offsetX - maskRect.width / 5;
        const maskOffsetY = offsetY - maskRect.height / 5;

        mask.style.transition =
          "transform 0.2s ease-out, background-color 0s linear";
        mask.style.transform = `translate(${maskOffsetX}px, ${maskOffsetY}px)`;

        const hue = (offsetX / boundingRect.width) * 360;
        const saturation = (offsetY / boundingRect.height) * 100;
        const backgroundColor = `hsl(${hue}, ${saturation}%, 50%)`;
        mask.style.backgroundColor = backgroundColor;
      }
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    const masks = document.querySelectorAll(
      ".xbot-outline_mouseMask__7FiGB, .xbot-outline_mouseMask_7FiGB"
    );

    masks.forEach((mask) => {
      if (mask) {
        mask.style.transition =
          "transform 0.2s ease-out, background-color 0.3s linear";
        mask.style.transform = "";
        mask.style.backgroundColor = "";
      }
    });
  }, []);

  const mouseMoveHandler = useCallback(
    (event) => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      requestRef.current = requestAnimationFrame(() => handleMouseMove(event));
    },
    [handleMouseMove]
  );

  useEffect(() => {
    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [mouseMoveHandler, handleMouseLeave]);

  return (
    <div>
      <section className="hero_container">
        <div className="row">
          <div className="col-sm-10 offset-sm-1">
            <HeroSVG />
          </div>
        </div>
        <section className="hero-details">
          <h1>Connect - Engage - Convert</h1>
          <a href="#" className="hero-details-button">
            <span>Official Whatsapp Business API [symbol]</span>
          </a>
        </section>
      </section>
    </div>
  );
};

export default HeroSection;
