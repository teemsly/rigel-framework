import React from "react";
import { Header, HeaderProps, TopNavigation } from "teemsly";
import { AppTopbar } from "..";

export interface AppTopNavigationProps extends HeaderProps {}

const AppTopNavigation = (props: HeaderProps) => {
  return (
    <TopNavigation header={<Header {...props} />} topbar={<AppTopbar />} />
  );
};

export default AppTopNavigation;
