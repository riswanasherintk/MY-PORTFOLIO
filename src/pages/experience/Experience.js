import React from "react";
import { Fade } from "react-reveal";

import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import ExperienceImg from "./ExperienceImg";
import { experience } from "../../portfolio.js";
import "./Experience.css";

function Experience(props) {
  const theme = props.theme;
  console.log(props.setTheme);
  return (
    <div className="experience-main" id="experience">
      <div className="basic-experience">
        <Fade top duration={3000} distance="20px">
          <h1 className="experience-heading-text" style={{ color: theme.text }}>
            {experience.title}
          </h1>
          <div className="experience-heading-text-div">
            <p
              className="experience-header-detail-text subTitle"
              style={{ color: theme.secondaryText }}
            >
              {experience["description"]}
            </p>

            <div className="experience-heading-img-div">
              <ExperienceImg theme={theme} />
            </div>
          </div>
        </Fade>
      </div>
      <ExperienceAccordion sections={experience["sections"]} theme={theme} />
    </div>
  );
}

export default Experience;
