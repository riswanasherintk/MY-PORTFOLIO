import React, { useState, useEffect } from "react";
import ReactGA from "react-ga";
import { HashRouter } from "react-router-dom";
import { CursorProvider } from "react-cursor-custom";
import { ThemeProvider } from "styled-components";

import Home from "./pages/home/HomeComponent";
import { themes } from "./theme";
import { GlobalStyles } from "./global";
import { settings } from "./portfolio";
import "./App.css";

function App() {
  useEffect(() => {
    if (settings.googleTrackingID) {
      ReactGA.initialize(settings.googleTrackingID, {
        testMode: process.env.NODE_ENV === "test",
      });
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }, []);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const useCursor = settings.useCustomCursor;

  const HomeContainer = () => {
    return (
      <div>
        <HashRouter basename="/">
          <Home theme={themes[theme]} setTheme={setTheme} />
        </HashRouter>
      </div>
    );
  };

  return (
    <ThemeProvider theme={themes[theme]}>
      <>
        <GlobalStyles />
        <div>
          {useCursor ? (
            <CursorProvider
              color={themes[theme].secondaryText}
              ringSize={25}
              transitionTime={75}
            >
              <HomeContainer />
            </CursorProvider>
          ) : (
            <HomeContainer />
          )}
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
