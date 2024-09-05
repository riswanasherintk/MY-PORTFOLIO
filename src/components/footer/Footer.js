import React from "react";
import { Fade } from "react-reveal";

import { contactInfo } from "../../portfolio.js";
import "./Footer.css";

export default function Footer(props) {
  return (
    <div className="footer-div" style={{ backgroundColor: props.theme.body }}>
      <Fade bottom>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          <a
            href={`tel:${contactInfo.phone_num}`}
            className="footer-phone"
            rel="noopener noreferrer"
            target="_blank"
            style={{
              color: props.theme.secondaryText,
              padding: 5,
              margin: 5,
              paddingInline: 30,
              textDecoration: "none",
            }}
          >
            <i className="fas fa-phone-alt">
              &nbsp;
              <a style={{ fontFamily: "Google Sans Regular" }}>
                {contactInfo.phone_num}
              </a>
            </i>
          </a>
          <a
            href={`mailto:${contactInfo.email_address}`}
            className="footer-email"
            rel="noopener noreferrer"
            target="_blank"
            style={{
              color: props.theme.secondaryText,
              padding: 5,
              margin: 5,
              paddingInline: 30,
              textDecoration: "none",
            }}
          >
            <i className="fa fa-envelope">
              &nbsp;
              <a style={{ fontFamily: "Google Sans Regular" }}>
                {contactInfo.email_address}
              </a>
            </i>
          </a>
        </p>
      </Fade>
    </div>
  );
}
