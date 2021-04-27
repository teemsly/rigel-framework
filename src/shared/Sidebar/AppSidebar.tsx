import React from "react";
import { Link } from "react-router-dom";
import { Sidebar, SidebarNav } from "teemsly";

import { RiHomeSmile2Line } from "react-icons/ri";
import { AiOutlineProject } from "react-icons/ai";
import { GiConvergenceTarget } from "react-icons/gi";
import { BsChatDots, BsCheckCircle, BsClipboardData } from "react-icons/bs";

import LogoSidebar from "../../assets/images/logo/logo_light.png";
import { addClassName } from "../../utils";

const ReactRouterLink = React.forwardRef((props: any, ref: any) => {
  const { href, ...rest } = props;
  return (
    <Link to={href} {...rest}>
      {props.children}
    </Link>
  );
});

const NavLink = (props: any) => (
  <SidebarNav.Item componentClass={ReactRouterLink} {...props} />
);

const SidebarLogo = () => {
  return (
    <Link
      to="/"
      className={addClassName("sidebar-logo")}
      style={{
        backgroundImage: `url("${LogoSidebar}")`,
      }}
    >
      <span className={addClassName("logo-text")}>Teemsly</span>
    </Link>
  );
};

const AppSidebar = () => {
  return (
    <Sidebar expander collapsible>
      <Sidebar.Header>
        <SidebarLogo />
      </Sidebar.Header>
      <SidebarNav>
        <NavLink href="/" active>
          <RiHomeSmile2Line /> Home
        </NavLink>
        <NavLink href="/my-works">
          <BsCheckCircle /> My Works
        </NavLink>
        <NavLink href="/projects">
          <AiOutlineProject /> Projects
        </NavLink>
        <NavLink href="/goals">
          <GiConvergenceTarget /> Goals
        </NavLink>
        <NavLink href="/chats">
          <BsChatDots /> Chats
        </NavLink>
        <NavLink href="/portfolios">
          <BsClipboardData /> Portfolios
        </NavLink>
      </SidebarNav>
      <Sidebar.Content></Sidebar.Content>
      <Sidebar.Footer></Sidebar.Footer>
    </Sidebar>
  );
};

export default AppSidebar;
