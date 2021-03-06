import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Page } from "teemsly";
import { PrivateRouteReactContext as RouteContext } from "teemsly-auth";
import { DetectNetwork as detectNetwork } from "./utils";
import { forbiddenUrl, loginUrl } from "./config/app";
import { AppRouter, routers } from "./routers";

import "teemsly/dist/styles/teemsly-default.css";
import "./assets/styles/sass/themes/default/app-default.scss";

function App() {
  /** Detect network connection  */
  detectNetwork();

  return (
    <Router>
      <RouteContext.Provider
        value={{
          authorities: [],
          loginUrl: loginUrl,
          unAuthorizedUrl: forbiddenUrl,
          isAuthenticated: false,
        }}
      >
        <Page>
          <AppRouter routers={routers} />
        </Page>
      </RouteContext.Provider>
    </Router>
  );
}

export default App;
