import React from "react";

import "./App.css";

import {
  HeaderSection,
  HeroSection,
  UserAcqSection,
  FeaturesSection,
  FooterSection,
  AboutSection,
} from "./Components/index.js";

function App() {
  

  return (
    <div className="App" >
      <HeaderSection />
      <HeroSection />
      <UserAcqSection />
      <FeaturesSection />
      <AboutSection/>
      <FooterSection/>
    </div>
  );
}

export default App;
