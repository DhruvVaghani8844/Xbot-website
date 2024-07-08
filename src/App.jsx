import React, { useRef } from "react";

import "./App.css";

import {
  HeaderSection,
  HeroSection,
  UserAcqSection,
  FeaturesSection,
  FooterSection,
  AboutSection,
  FormSection,
} from "./Components/index.js";

function App() {
  const featuresRef = useRef(null);
  const aboutRef = useRef(null);
  // const contactRef = useRef(null)
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="App">
      <HeaderSection
        scrollToSection={scrollToSection}
        refs={{ featuresRef, aboutRef }}
      />
      <HeroSection />
      <UserAcqSection />
      <section id="features" ref={featuresRef}>
        <FeaturesSection />
      </section>
      <section id="about" ref={aboutRef}>
        <AboutSection />
      </section>
      <FormSection />
      <FooterSection />
    </div>
  );
}

export default App;
