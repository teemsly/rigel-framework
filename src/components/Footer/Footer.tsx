import React from "react";
import { addClassName } from "../../utils";

export interface FooterProps {
  copyrightCompany?: string;
  copyrightYear?: string | number;
  children?: React.ReactNode;
}

const Footer: React.FC<FooterProps> = (props: FooterProps) => {
  const { copyrightCompany, copyrightYear, children } = props;

  return (
    <div className={addClassName("footer-wrapper")}>
      <div className={addClassName("footer-item")}>
        <span className={addClassName("footer-copyright-label")}>
          {copyrightCompany}
        </span>{" "}
        © {copyrightYear}
      </div>
      {children}
    </div>
  );
};

Footer.defaultProps = {
  copyrightCompany: "Teemsly",
  copyrightYear: new Date().getFullYear(),
};

export default Footer;
