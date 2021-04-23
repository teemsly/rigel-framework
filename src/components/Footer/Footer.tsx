import React from "react";

export interface FooterProps {
  copyrightCompany?: string;
  copyrightYear?: string | number;
  children?: React.ReactNode;
}

const Footer: React.FC<FooterProps> = (props: FooterProps) => {
  const { copyrightCompany, copyrightYear, children } = props;

  return (
    <div className="ts-footer-wrapper">
      <div className="ts-footer-item">
        <span className="ts-footer-copyright-label">{copyrightCompany}</span> ©{" "}
        {copyrightYear}
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
