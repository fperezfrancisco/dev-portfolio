import React from "react";

const HeroSection = () => {
  return (
    <section className="sectionContainer flex heroSection" id="hero">
      <div className="noisyOverlay"></div>
      <div className="heroCopy flex">
        <h1 className="mainHeading">Francisco J. Perez</h1>
        <h2 className="subHeading">Front-End Developer</h2>
        <button className="pageBtn resumeBtn">Resume</button>
      </div>
    </section>
  );
};

export default HeroSection;
