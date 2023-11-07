import React from "react";
import HeroSection from "./HeroSection";
import ProjectSection from "./ProjectSection";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";

const Main = () => {
  return (
    <div className="flex-column mainContainer">
      <HeroSection />
      <div className="sectionsContainer">
        <ProjectSection />
        <AboutSection />
        <SkillsSection />
      </div>
    </div>
  );
};

export default Main;
