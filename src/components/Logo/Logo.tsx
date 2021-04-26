import React from "react";

import Logo128 from "../../assets/images/logo/logo-128.png";
import { addClassName } from "../../utils";

export interface LogoProps {
  src?: string;
  alt?: string;
}

const Logo: React.FC<LogoProps> = (props: LogoProps) => {
  const { src = Logo128, alt } = props;
  return (
    <div className={addClassName("logo")}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Logo;
