import React, { useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import {
  HeaderSection,
  HeroSection,
  UserAcqSection,
  FeaturesSection,
  FooterSection,
  AboutSection,
  FormSection,
  PrivacyPolicy,
} from "./Components/index.js";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const featuresRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <HeaderSection
          scrollToSection={scrollToSection}
          refs={{ featuresRef, aboutRef, contactRef }}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <UserAcqSection />
                <section id="features" ref={featuresRef}>
                  <FeaturesSection />
                </section>
                <section id="about" ref={aboutRef}>
                  <AboutSection />
                </section>
                <section id="contact" ref={contactRef}>
                  <FormSection />
                </section>
              </>
            }
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <FooterSection
          scrollToSection={scrollToSection}
          refs={{ featuresRef, aboutRef }}
        />
      </div>
    </Router>
  );
}

export default App;
