import React from "react";
import { Fade } from "react-reveal";
import { style } from "glamor";

import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting, contactPageData } from "../../portfolio.js";
import "./ContactComponent.css";

const ContactData = contactPageData.contactSection;

function Contact(props) {
  const theme = props.theme;

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <div className="contact-main" id="contact">
      <div className="basic-contact">
        <div className="contact-heading-div">
          <Fade left duration={2000} distance="40px">
            <div className="contact-heading-img-div">
              <img
                className="profile-pic"
                src={require(`../../assests/images/${ContactData["profile_image_path"]}`)}
                alt=""
              />
            </div>
          </Fade>
          <Fade right duration={1000} distance="40px">
            <div className="contact-heading-text-div">
              <h1
                className="contact-heading-text"
                style={{ color: theme.text }}
              >
                {ContactData["title"]}
              </h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {ContactData["description"]}
              </p>
              <SocialMedia />
              <br />
              <br />
              <a
                {...styles}
                style={{ paddingInline: 50 }}
                className="general-btn"
                href={greeting.resumeLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                Resume
              </a>
            </div>
          </Fade>
        </div>
        {/* <Fade bottom duration={1000} distance="40px">
          <div className="blog-heading-div">
            <div className="blog-heading-text-div">
              <h1 className="blog-heading-text" style={{ color: theme.text }}>
                {blogSection["title"]}
              </h1>
              <p
                className="blog-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {blogSection["subtitle"]}
              </p>
              <div className="blogsite-btn-div">
                <a {...styles} className="general-btn" href={blogSection.link} target="_blank">
                  Medium Blogs
                </a>
              </div>
            </div>
            <div className="blog-heading-img-div">
              <BlogsImg theme={theme} />
            </div>
          </div>
        </Fade> */}
      </div>
    </div>
  );
}

export default Contact;
