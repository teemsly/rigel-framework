import { Home } from "../modules";
import routerName from "./routerName";

const routers = [
  {
    path: routerName.base,
    component: Home,
    // auth: true,
    // hasAuthorities: [],
    exact: true,
  },
];

export default routers;
