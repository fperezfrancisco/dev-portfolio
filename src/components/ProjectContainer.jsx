import React from "react";

const ProjectContainer = ({
  projTitle,
  projDescription,
  projLiveLink,
  projSourceLink,
  projImg,
  toolsUsed,
}) => {
  const handleLiveClick = () => {
    window.open(projLiveLink, "_blank");
  };

  const handleSourceClick = () => {
    window.open(projSourceLink, "_blank");
  };

  return (
    <div className="grid projectBox">
      <div className="projectImgContainer flex-column">
        <img
          className="projectImg"
          alt={`${projTitle} project thumbnail`}
          src={projImg}
        />
      </div>
      <div className="projectCopyContainer flex-column">
        <h3 className="projectTitle">{projTitle}</h3>
        <p className="sectionPara projectDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
          magnam nemo error vero numquam laborum dolorem aliquam quo corrupti
          doloremque perspiciatis quidem non aliquid temporibus ab, eveniet
          accusantium excepturi quas!
        </p>
        <div className="projTools sectionPara flex">{toolsUsed}</div>
        <div className="projectBtnsContainer flex">
          <button
            className="sourceCodeBtn pageBtn flex"
            onClick={handleSourceClick}
          >
            Source Code
          </button>
          <button
            className="liveCodeBtn pageBtn flex"
            onClick={handleLiveClick}
          >
            Live Example
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectContainer;
