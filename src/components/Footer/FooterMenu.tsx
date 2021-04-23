import React from "react";

export interface FooterMenuProps {
  children?: React.ReactNode;
}

const FooterMenu = (props: FooterMenuProps) => {
  const { children } = props;
  return <div className="ts-footer-menu-options">{children}</div>;
};

export default FooterMenu;
