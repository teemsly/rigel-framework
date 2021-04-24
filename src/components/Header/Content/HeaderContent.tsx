import React from "react";
import { addClassName } from "../../../utils";

export interface HeaderContentProps {
  heading: string;
  subheading?: string;
}

const HeaderContent: React.FC<HeaderContentProps> = (
  props: HeaderContentProps
) => {
  const { heading, subheading } = props;

  return (
    <div className={addClassName("header-content")}>
      <h1 className={addClassName("header-content-heading")}>{heading}</h1>
      {subheading && (
        <div className={addClassName("header-content-subheading")}>
          {subheading}
        </div>
      )}
    </div>
  );
};

export default HeaderContent;
