import React from "react";

const HeroSection = () => {
  return (
    <section className="sectionContainer flex heroSection" id="hero">
      <h1 className="mainHeading">Francisco J. Perez</h1>
      <h2 className="subHeading">Front-End Developer</h2>
      <button className="pageBtn resumeBtn">Resume</button>
      <div className="linksSection"></div>
      <div className="artworkSection">
        <div className="artBox" id="lowLeft">
          <div className="artImgHero flex" id="lowLeftImg"></div>
        </div>
        <div className="artBox" id="highRight">
          <div className="artImgHero flex" id="highRightImg"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
