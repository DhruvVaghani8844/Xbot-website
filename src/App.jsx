import React from "react";
import "./App.css";

import { HeaderSection, HeroSection,UserAcqSection,FeaturesSection } from "./Components/index.js";

function App() {
  return (
    <div>
      <HeaderSection />
      <HeroSection />
      <UserAcqSection/>
      <FeaturesSection/>
    </div>
  );
}

export default App;
