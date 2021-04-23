import React from "react";

export interface HeaderContentProps {
  heading: string;
  subheading?: string;
}

const HeaderContent: React.FC<HeaderContentProps> = (
  props: HeaderContentProps
) => {
  const { heading, subheading } = props;

  return (
    <div className="ts-header-content">
      <h1 className="ts-header-content-heading">{heading}</h1>
      {subheading && (
        <div className="ts-header-content-subheading">{subheading}</div>
      )}
    </div>
  );
};

export default HeaderContent;
