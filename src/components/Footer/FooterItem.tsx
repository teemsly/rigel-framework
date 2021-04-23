import React from "react";

export interface FooterItemProps {
  children?: React.ReactNode;
}

const FooterItem = (props: FooterItemProps) => {
  const { children } = props;
  return <div className="ts-footer-item">{children}</div>;
};

export default FooterItem;
