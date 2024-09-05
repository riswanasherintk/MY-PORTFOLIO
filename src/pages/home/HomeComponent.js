import React, { useState } from "react";

import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import Experience from "../experience/Experience";
import Education from "../education/EducationComponent";
import Projects from "../projects/Projects";
import Contact from "../contact/ContactComponent";
import { settings } from "../../portfolio";

import "../splash/Splash.css";

function AnimatedSplash(props) {
  return (
    <div className="logo_wrapper">
      <div className="loading">
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
      </div>
    </div>
  );
}

function Home(props) {
  const [showSplash, setShowSplash] = useState(settings.isSplash);
  setTimeout(() => setShowSplash(false), 500);

  if (showSplash) return <AnimatedSplash />;

  return (
    <div>
      <Header {...props} />
      <Greeting {...props} />
      <Skills {...props} />
      <Experience {...props} />
      <Education {...props} />
      <Projects {...props} />
      <Contact {...props} />
      <Footer {...props} />
    </div>
  );
}

export default Home;
