import React from "react";
import { Fade } from "react-reveal";
import { style } from "glamor";

import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { projectsHeader, projects } from "../../portfolio.js";
import ProjectsImg from "./ProjectsImg";
import "./Projects.css";

function Projects(props) {
  const theme = props.theme;

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <div className="projects-main" id="projects">
      <div className="basic-projects">
        <Fade left duration={1000}>
          <div className="projects-heading-div">
            <div className="projects-heading-text-div">
              <h1
                className="projects-heading-text"
                style={{ color: theme.text }}
              >
                {projectsHeader.title}
              </h1>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {projectsHeader["description"]}
              </p>
            </div>
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="projects-heading-img-div">
            <ProjectsImg theme={theme} />
          </div>
        </Fade>
      </div>
      <div className="repo-cards-div-main">
        {projects.data.map((repo) => {
          return <ProjectCard repo={repo} theme={theme} />;
        })}
      </div>
      <br />
    </div>
  );
}

export default Projects;
