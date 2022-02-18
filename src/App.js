// import { useState, useLayoutEffect, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
// import { createContext } from "react";
// import { getAuth, onAuthStateChanged } from "firebase/auth";

import HomePage from "./pages/home";
import GovernancePage from "./pages/governance";
import OpportunitiesPage from "./pages/opportunities";
import EventPage from "./pages/events";
import SupportPage from "./pages/support";

import BackToTop from "components/BackToTop";

import "./App.css";

function App() {
  // const AppContext = createContext({});
  return (
    <div className="App">
      {/* <AppContext.Provider> */}
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/governance" component={GovernancePage} />
            <Route exact path="/opportunities" component={OpportunitiesPage} />
            <Route exact path="/events" component={EventPage} />
            <Route exact path="/support" component={SupportPage} />
            <Redirect from="*" to="/" />
          </Switch>
        </BrowserRouter>
      {/* </AppContext.Provider> */}
      <BackToTop />
    </div>
  );
}

export default App;