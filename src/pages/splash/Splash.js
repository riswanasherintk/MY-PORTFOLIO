import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import { settings } from "../../portfolio";
import "./Splash.css";

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

function Splash(props) {
  const [redirect, setRedirect] = useState(!settings.isSplash);
  setTimeout(() => setRedirect(true), 1000);

  return redirect ? (
    <Redirect to="/home" />
  ) : (
    <AnimatedSplash theme={props.theme} />
  );
}

export default Splash;
