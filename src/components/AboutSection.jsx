import React from "react";

const AboutSection = () => {
  return (
    <section className="sectionContainer flex-column aboutSection">
      <h2 className="sectionHeading">About</h2>
      <div className="aboutTextSection grid">
        <div className="aboutCopySection flex-column">
          <p className="sectionPara">
            Hello, I'm Francisco, a Front End Developer with a unique journey
            into the world of technology. My path began at the University of
            California, Berkeley, where I earned my BA in Applied Mathematics in
            2021. During my time there, I delved into the world of computer
            science, taking courses in Data Structures, Logic, Algorithms, and
            more. These courses provided me with a strong foundation in
            problem-solving and critical thinking, skills that continue to serve
            me well in my development career.
          </p>
          <p className="sectionPara">
            After graduating, I embarked on an exciting detour to pursue my
            lifelong dream of becoming a professional soccer player. While
            chasing this passion, I discovered another one in Front End
            Development. I couldn't resist the allure of code, spending my free
            time working on personal projects, honing my skills, and staying
            connected to the ever-evolving tech landscape.
          </p>
          <p className="sectionPara">
            Now, while shifting my focus and commitment to my newfound passion
            for Front End Development, I'm eager to bring web and mobile
            applications to life, crafting intuitive and visually appealing user
            experiences. My journey may have taken a few unexpected turns, but I
            believe that every experience contributes to our growth and
            perspective.
          </p>
          <p className="sectionPara">
            I approach every project with enthusiasm, attention to detail, and a
            desire to create seamless and delightful digital experiences. I'm
            excited to collaborate, learn, and grow within the dynamic field of
            web development.
          </p>
        </div>
        <div className="aboutImageBulletSection flex-column">
          <div className="aboutImgContainer"></div>
          <div className="aboutListContainer flex-column">
            <ul className="aboutList flex-column">
              <li className="listItem flex">
                B.A. Applied Mathematics (2017 - 2021) UC Berkeley
              </li>
              <li className="listItem flex">
                Coursework in relevant areas - CS, Data Science, Mathematics,
                UI/UX,{" "}
              </li>
              <li className="listItem flex">
                Other interests include - Soccer (playing & coaching), Music,
                Tennis, Travel & Adventuring
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
