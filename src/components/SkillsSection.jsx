import React from "react";
import html5 from "../tech-svgs/html5.svg";
import css from "../tech-svgs/css-3-icon.svg";
import vanillaJS from "../tech-svgs/javascript-icon.svg";
import nodeJS from "../tech-svgs/node-js-transparent.svg";
import reactJS from "../tech-svgs/react-icon.svg";
import python from "../tech-svgs/python-icon.svg";
import github from "../tech-svgs/github.svg";
import figma from "../tech-svgs/figma-logo.svg";
import mongodb from "../tech-svgs/mongodb.svg";

const SkillsSection = () => {
  return (
    <section className="sectionContainer skillsContainer flex-column">
      <h2 className="sectionHeading">Skills</h2>
      <div className="softwareContainer flex-column">
        <h3 className="skillsHeading">Languages, Tools, & Software</h3>
        <div className="toolsIconContainer grid">
          <div className="iconBox flex-column" id="htmlBox">
            <h4 className="iconTitle">HTML</h4>
            <img
              id="htmlIcon"
              width={80}
              src={html5}
              className="iconImg"
              alt="htmlIcon"
            />
          </div>
          <div className="iconBox flex-column" id="cssBox">
            <h4 className="iconTitle">CSS</h4>
            <img
              id="cssIcon"
              width={70}
              src={css}
              className="iconImg"
              alt="CSS"
            />
          </div>
          <div className="iconBox flex-column" id="jsBox">
            <h4 className="iconTitle">Vanilla JavaScript</h4>
            <img
              width={80}
              src={vanillaJS}
              className="iconImg"
              alt="Vanilla Javascript"
              id="jsIcon"
            />
          </div>
          <div className="iconBox flex-column" id="reactBox">
            <h4 className="iconTitle">React JS</h4>
            <img
              id="reactIcon"
              width={80}
              src={reactJS}
              className="iconImg"
              alt="React JS"
            />
          </div>
          <div className="iconBox flex-column" id="pythonBox">
            <h4 className="iconTitle">Python</h4>
            <img
              id="pythonIcon"
              width={80}
              src={python}
              className="iconImg"
              alt="Python"
            />
          </div>
          <div className="iconBox flex-column" id="nodeBox">
            <h4 className="iconTitle">Node JS</h4>
            <img
              id="nodeIcon"
              width={80}
              src={nodeJS}
              className="iconImg"
              alt="Node JS"
            />
          </div>
          <div className="iconBox flex-column" id="figmaBox">
            <h4 className="iconTitle">Figma</h4>
            <img
              id="figmaIcon"
              width={80}
              src={figma}
              className="iconImg"
              alt="Figma"
            />
          </div>
          <div className="iconBox flex-column" id="gitBox">
            <h4 className="iconTitle">Git & Github</h4>
            <img
              id="gitIcon"
              width={80}
              src={github}
              className="iconImg"
              alt="Git & Github"
            />
          </div>
          <div className="iconBox flex-column" id="mongoBox">
            <h4 className="iconTitle">Mongo DB</h4>
            <img
              id="mongoIcon"
              width={80}
              src={mongodb}
              className="iconImg"
              alt="Mongo DB"
            />
          </div>
        </div>
      </div>
      <div className="otherSkillsContainer grid">
        <div className="otherSkillsBlock flex-column">
          <h3 className="skillsHeading">Technical Skills</h3>
          <ul className="technicalList flex-column">
            <li className="listItem technicalListItem flex-column">
              <h4 className="listHeading">HTML & CSS Best Practices</h4>
              <p className="sectionPara">
                Proficient & Well-versed in all HTML5 and CSS3 practices - DOM
                manipulation, CSS Animations, inheritance, & accessibility.
              </p>
            </li>
            <li className="listItem technicalListItem flex-column">
              <h4 className="listHeading">
                JavaScript Data Structures, OOP, Async-style Code, & Modular
                Pattern Design
              </h4>
              <p className="sectionPara">
                Fluent in JavaScript Programming Language, data structures, data
                structure manipulation, and object oriented programming.
              </p>
            </li>
            <li className="listItem technicalListItem flex-column">
              <h4 className="listHeading">API integration</h4>
              <p className="sectionPara">
                Knowledge of how to access and integrate third-party API’s into
                front-end projects.
              </p>
            </li>
            <li className="listItem technicalListItem flex-column">
              <h4 className="listHeading">Testing & Debugging</h4>
              <p className="sectionPara">
                Keen eye to actively test edge cases and understanding of how to
                use tools in order to debug code blocks and projects.
              </p>
            </li>
            <li className="listItem technicalListItem flex-column">
              <h4 className="listHeading">
                Design Layouts & Responsive Design
              </h4>
              <p className="sectionPara">
                Fundamental understanding of design layout practices and the
                ability to make all front-end projects responsive to different
                screen sizes.
              </p>
            </li>
          </ul>
        </div>
        <div className="otherSkillsBlock flex-column">
          <h3 className="skillsHeading">Personality Traits</h3>
          <ul className="technicalList flex-column">
            <li className="listItem technicalListItem flex-column">
              <h4 className="listHeading">Patient, Focused, & Driven</h4>
              <p className="sectionPara">
                Self-driven mentality to tackle any project/concept and bring it
                into action solo or in a collective setting.
              </p>
            </li>
            <li className="listItem technicalListItem flex-column">
              <h4 className="listHeading">Creative & Detail-oriented</h4>
              <p className="sectionPara">
                Creative soul that isn’t afraid of thinking outside the box and
                making some design decisions when necessary. Very detail
                oriented.
              </p>
            </li>
            <li className="listItem technicalListItem flex-column">
              <h4 className="listHeading">
                Adaptable & Receptive to New Concepts
              </h4>
              <p className="sectionPara">
                Quick to adapt to new and different circumstances when
                necessary. Quick learner and fast at grasping new tools,
                languages, frameworks, etc.
              </p>
            </li>
            <li className="listItem technicalListItem flex-column">
              <h4 className="listHeading">
                Great Communicator & Team oriented
              </h4>
              <p className="sectionPara">
                Very communicative and responsible. Understand the importance of
                working as a team and the impact of different roles. Unafraid to
                step up to leadership roles when called upon.
              </p>
            </li>
            <li className="listItem technicalListItem flex-column">
              <h4 className="listHeading">Approachable & Empathetic</h4>
              <p className="sectionPara">
                Social, energetic, and lively. Know and understand how to
                communicate with users, customers, and other colleagues in a
                professional but personable manner.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
