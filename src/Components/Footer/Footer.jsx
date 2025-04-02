import React from 'react';
import SocialLinks from '../SocialLinks';
import './Footer.css';
import FooterIMG from "../../Images/evonne-weinhaus-fast-solutiuons.png"

const Footer = props => {
  return (
    <footer>
      <div className="wrapper">
        <h3>THANKS FOR VISITING</h3>
        <p>© {new Date().getFullYear()} Evonne Weinhaus.</p>
      <div className="wrapper-social">
          <SocialLinks />
        </div>
        </div>
    </footer>
  );
};

export default Footer;
