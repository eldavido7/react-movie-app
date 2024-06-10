import React from "react";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import "./style.scss";
import footerImage from './tmdb.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <div className="infoText">
          React Movie Recommendation App, Powered by TMDB
        </div>
        <div className="footerImage">
          <img src={footerImage} alt="footerImage" />
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;