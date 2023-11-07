import React from "react";

const Section = ({ sectionName }) => {
  return (
    <section className="sectionContainer flex-column">
      <h2 className="sectionHeading">{sectionName}</h2>
    </section>
  );
};

export default Section;
