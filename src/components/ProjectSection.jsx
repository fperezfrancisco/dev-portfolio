import React from "react";
import ProjectContainer from "./ProjectContainer";
import LynxHome from "../imgs/lynx-home.png";
import WordleImg from "../imgs/wordle-game.png";
import EcommerceImg from "../imgs/ecommerce-website-thumbnail.png";

const ProjectSection = () => {
  return (
    <section className="sectionContainer flex-column projectSection">
      <h2 className="sectionHeading">Projects</h2>
      <div className="grid projectsContainer">
        <ProjectContainer
          projTitle="E-commerce Website"
          projImg={EcommerceImg}
          toolsUsed="ReactJs - NodeJs - ExpressJs - Github - Figma"
        />
        <ProjectContainer
          projTitle="Digital Media Client Website"
          projImg={LynxHome}
          projLiveLink="https://lynx-digitalmedia.com/"
          projSourceLink="https://github.com/fperezfrancisco/lynx-official-website"
          toolsUsed="HTML - CSS - JavaScript - Figma - Github - Netlify"
        />
        <ProjectContainer
          projTitle="Wordle Game Clone"
          projImg={WordleImg}
          toolsUsed="HTML - CSS - JavaScript - Github "
          projSourceLink={"https://github.com/fperezfrancisco/wordle"}
          projLiveLink={"https://fperezfrancisco.github.io/wordle/"}
        />
      </div>
    </section>
  );
};

export default ProjectSection;
