import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../components";

const AppFooter = () => {
  return (
    <Footer>
      <Footer.Menu>
        <Footer.Item>
          <Link to="/">User Agreement </Link>
        </Footer.Item>
        <Footer.Item>
          <Link to="/">Community Guidelines </Link>
        </Footer.Item>
        <Footer.Item>
          <Link to="/">Cookie Policy </Link>
        </Footer.Item>
        <Footer.Item>
          <Link to="/">Copyright Policy </Link>
        </Footer.Item>
        <Footer.Item>
          <Link to="/">Send Feedback </Link>
        </Footer.Item>
        <Footer.Item>
          <Link to="/">English </Link>
        </Footer.Item>
      </Footer.Menu>
    </Footer>
  );
};

export default AppFooter;
