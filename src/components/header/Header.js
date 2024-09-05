import React, { useState, useEffect } from "react";
import { Fade } from "react-reveal";
import { CgSun } from "react-icons/cg/";
import { HiMoon } from "react-icons/hi";
import { style } from "glamor";

import { greeting } from "../../portfolio.js";
import "./Header.css";

const HeaderItems = [
  {
    title: "Home",
    props: {
      className: "homei",
      href: "#home",
    },
  },
  {
    title: "Experience",
    props: {
      className: "xp",
      href: "#experience",
    },
  },
  {
    title: "Education",
    props: {
      className: "ec",
      href: "#education",
    },
  },
  {
    title: "Projects",
    props: {
      className: "projects",
      href: "#projects",
    },
  },
  {
    title: "Contact",
    props: {
      className: "cr",
      href: "#contact",
    },
  },
];

function Header(props) {
  const theme = props.theme;
  const styles = style({
    cursor: "pointer",
    height: "45px",
    width: "45px",
    marginRight: "5px",
    marginLeft: "15px",
    paddingTop: "5px",
    borderRadius: "50%",
    border: "none",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: props.theme.name === "light" ? "#7CD1F7" : "#292C3F",
    outline: "none",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `0 3px 8px ${
        props.theme.name === "light" ? "#F7D774" : "#646464"
      }`,
    },
  });

  const [currTheme, setCurrTheme] = useState(props.theme);

  function changeTheme() {
    if (currTheme === "light") {
      props.setTheme("dark");
      localStorage.setItem("theme", "dark");
      setCurrTheme("dark");
    } else {
      props.setTheme("light");
      localStorage.setItem("theme", "light");
      setCurrTheme("light");
    }
  }

  const icon =
    props.theme.name === "dark" ? (
      <HiMoon
        strokeWidth={1}
        size={20}
        color={props.theme.name === "light" ? "#F9D784" : "#A7A7A7"}
      />
    ) : (
      <CgSun
        strokeWidth={1}
        size={20}
        color={props.theme.name === "light" ? "#F9D784" : "#A7A7A7"}
      />
    );

  useEffect(() => {
    const menuItems = document.querySelectorAll(".header .menu a");
    const menuCheckbox = document.getElementById("menu-btn");

    const handleClick = (event) => {
      const target = document.querySelector(event.target.hash);
      if (target) {
        event.preventDefault();
        menuCheckbox.click();
        setTimeout(() => {
          window.scrollTo({
            top: target.offsetTop,
            behavior: "smooth",
          });
        }, 300);
      }
    };

    menuItems.forEach((item) => {
      item.addEventListener("click", handleClick);
    });

    return () => {
      menuItems.forEach((item) => {
        item.removeEventListener("click", handleClick);
      });
    };
  }, []);

  return (
    <Fade top duration={1000} distance="20px">
      <div className="fixed-header" style={{ backgroundColor: theme.body }}>
        <header className="header">
          <a className="logo" href="#home">
            <span style={{ color: theme.text }}></span>
            <span className="logo-name" style={{ color: theme.text }}>
              {greeting.logo_name}
            </span>
            <span style={{ color: theme.text }}></span>
          </a>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            {HeaderItems.map((item) => (
              <li key={item.title}>
                <a
                  {...item.props}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ borderRadius: 5, color: theme.text }}
                >
                  {item.title}
                </a>
              </li>
            ))}
            <button {...styles} onClick={changeTheme}>
              {icon}
            </button>
          </ul>
        </header>
      </div>
    </Fade>
  );
}

export default Header;
