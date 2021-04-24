import { lazy } from "react";
import routerName from "./routerName";

const routers = [
  {
    path: routerName.base,
    component: lazy(() => import("../modules/Home")),
    // auth: true,
    // hasAuthorities: [],
    exact: true,
  },
  {
    path: routerName.login,
    component: lazy(() => import("../modules/Login")),
  },
  {
    path: routerName.signup,
    component: lazy(() => import("../modules/Signup")),
  },
  {
    path: "*",
    component: lazy(() => import("../modules/Error/PageNotFound")),
  },
];

export default routers;
