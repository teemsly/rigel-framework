import React from "react";
import { Content } from "teemsly";
import AppSidebar from "../Sidebar/AppSidebar";

export interface AppLayoutProps {
  children?: React.ReactNode;
}

function AppLayout(props: AppLayoutProps) {
  const { children } = props;

  return (
    <React.Fragment>
      <AppSidebar />
      <Content>{children}</Content>
    </React.Fragment>
  );
}

export default AppLayout;
