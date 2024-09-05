import React from "react";
import { Fade } from "react-reveal";
import { style } from "glamor";

import FeelingProud from "./FeelingProud";
import { greeting } from "../../portfolio";
import "./Greeting.css";

export default function Greeting(props) {
  const theme = props.theme;

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="home">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">{greeting.title}</h1>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                <span>I'm </span>
                <span style={{ color: theme.accentColor }}>
                  {greeting.full_name}.{" "}
                </span>
                {greeting.subTitle}
              </p>
              <a href="/#contact" style={{ textDecoration: "none" }}>
                <div className="portfolio-repo-btn-div">
                  <button {...styles} className="button">
                    Contact Me
                  </button>
                </div>
              </a>
            </div>
          </div>
          <div className="greeting-image-div">
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
