import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";
import "./App.css";

import {
  HeaderSection,
  HeroSection,
  UserAcqSection,
  FeaturesSection,
  FooterSection,
} from "./Components/index.js";

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        lerp:0.1
      });

      return () => {
        if (scroll) scroll.destroy();
      };
    }
  }, []);

  return (
    <div className="App" ref={scrollRef}>
      <HeaderSection />
      <HeroSection />
      <UserAcqSection />
      <FeaturesSection />
      <FooterSection/>
    </div>
  );
}

export default App;
