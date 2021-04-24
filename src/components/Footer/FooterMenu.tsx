import React from "react";
import { addClassName } from "../../utils";

export interface FooterMenuProps {
  children?: React.ReactNode;
}

const FooterMenu = (props: FooterMenuProps) => {
  const { children } = props;
  return <div className={addClassName("footer-menu-options")}>{children}</div>;
};

export default FooterMenu;
