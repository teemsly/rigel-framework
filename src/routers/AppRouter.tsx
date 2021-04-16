import React from "react";
import { Route, Switch } from "react-router-dom";
import { PrivateRouteReact } from "teemsly-auth";

export interface AppRouterProps {
  routers: any[];
}
const AppRouter = ({ routers = [] }: AppRouterProps) => {
  return (
    <React.Fragment>
      <Switch>
        {routers.map((router: any, index: number) => {
          let { auth, ...rest } = router;
          if (typeof auth !== "undefined" && auth) {
            return <PrivateRouteReact key={index} {...rest} />;
          }
          return <Route key={index} {...rest} />;
        })}
      </Switch>
    </React.Fragment>
  );
};

export const PrivateSubRoutes = (router: any) => {
  return (
    <PrivateRouteReact
      hasAuthorities={router.hasAuthorities}
      render={(props) => (
        <router.component {...props} routers={router.routers} />
      )}
    />
  );
};

export const WithSubRoutes = (router: any) => {
  return (
    <Route
      render={(props) => (
        <router.component {...props} routers={router.routers} />
      )}
    />
  );
};

export default AppRouter;
