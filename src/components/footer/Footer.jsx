import React from "react";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <div className="infoText">
          React Movie Recommendation App
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;