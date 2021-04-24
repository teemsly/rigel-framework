import React from "react";
import { addClassName } from "../../utils";

export interface FooterItemProps {
  children?: React.ReactNode;
}

const FooterItem = (props: FooterItemProps) => {
  const { children } = props;
  return <div className={addClassName("footer-item")}>{children}</div>;
};

export default FooterItem;
