import routerName from "./routerName";

const routers = [
  {
    path: routerName.base,
    component: () => <div>base route</div>,
    // auth: true,
    // hasAuthorities: [],
    exact: true,
  },
];

export default routers;
