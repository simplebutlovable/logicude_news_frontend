import React, { useState, Suspense } from "react";
import "./App.css";
import Loader from "react-loader-spinner";
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./utility/globalStyles";
import { lightTheme, darkTheme } from "./utility/Themes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./Components/globalTemplates/navbar";
import Footer from "./Components/globalTemplates/footer";
import NewsDetails from "./Components/globalTemplates/newsDetails";
// import LandingPage from './Components/landingpage';
// import ScienceComponent from './Components/scienceComponent';
// import StreamingComponent from './Components/streamingComponent';
// import ContentNotFound from './Components/globalTemplates/contentNotFound';
// import GadgetsComponent from './Components/gadgetsComponent';
// import GamesComponent from './Components/gamesComponent';
// import AboutComponent from './Components/aboutComponent';

const LandingPage = React.lazy(() => import("./Components/landingpage"));
const ContentNotFound = React.lazy(() =>
  import("./Components/globalTemplates/contentNotFound")
);
const ScienceComponent = React.lazy(() =>
  import("./Components/scienceComponent")
);
const GadgetsComponent = React.lazy(() =>
  import("./Components/gadgetsComponent")
);
const GamesComponent = React.lazy(() => import("./Components/gamesComponent"));
const StreamingComponent = React.lazy(() =>
  import("./Components/streamingComponent")
);

const AboutComponent = React.lazy(() => import("./Components/aboutComponent"));

function App() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <HelmetProvider>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="app">
        <Router>
          <div className="navigation">
            <Navigation onThemeChange={themeToggler} mode={theme} />
          </div>
          <Suspense
            fallback={
              <div className="parent_loader">
                <div className="loader_container">
                  <Loader type="TailSpin" color="gray" width={40} />
                </div>
              </div>
            }
          >
            <Switch>
              <Route exact path="/" component={()=><LandingPage />} />
              <Route exact path="/science" component={ScienceComponent} />
              <Route exact path="/gadgets" component={GadgetsComponent} />
              <Route exact path="/games" component={GamesComponent} />
              <Route exact path="/stream" component={StreamingComponent} />
              <Route
                exact
                path="/about"
                component={() => <AboutComponent mode={theme} />}
              />
              <Route path="/news/:id" component={NewsDetails} />

              {/* Fallback Directory (404) */}
              <Route path="*" component={ContentNotFound} />
            </Switch>
          </Suspense>
          <Footer mode={theme} />
        </Router>
      </div>
    </ThemeProvider>
    </HelmetProvider>

  );
}

export default App;
