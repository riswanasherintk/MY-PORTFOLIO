import React from "react";
import { Fade } from "react-reveal";

import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import EducationImg from "./EducationImg";
import "./EducationComponent.css";

function Education(props) {
  const theme = props.theme;
  return (
    <div className="education-main" id="education">
      <div className="basic-education">
        <Fade top duration={2000} distance="40px">
          <div className="heading-div">
            <div className="heading-text-div">
              <h1 className="heading-text" style={{ color: theme.text }}>
                Education
              </h1>
              <h3 className="heading-sub-text" style={{ color: theme.text }}>
                Basic Qualification and Certifications
              </h3>
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                I am a B.Tech graduate in Computer Science and Engineering,
                passed out in 2018 with a CGPA of 8.4
              </p>
            </div>
            <div className="heading-img-div">
              <EducationImg theme={theme} />
            </div>
          </div>
        </Fade>
        <Educations theme={props.theme} />
        <Certifications theme={props.theme} />
      </div>
    </div>
  );
}

export default Education;
