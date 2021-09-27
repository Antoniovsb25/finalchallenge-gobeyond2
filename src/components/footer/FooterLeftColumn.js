import React from "react";
import './Footer.css'
import SocialMedia from './SocialMedia'
import FooterNavBar from '../navigation/FooterNavBar'

const FooterLeftColumn = () => {
  return (
    <section className="footer-left-column">
      <div className="logo-social-media">
        <img className="logo-preta" src="images/logo-preta.svg" alt="logo-preta" />
        <p>direitos reservados, corebiz 2021</p>
        <SocialMedia />
      </div>
      <FooterNavBar />
    </section>
  );
};

export default FooterLeftColumn;
