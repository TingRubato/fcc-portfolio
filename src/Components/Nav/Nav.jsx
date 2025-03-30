import React from "react";
import "./Nav.css";
import BrandLogo from "../../Images/e-logo.png";

const Nav = (props) => {
  return (
    <nav id="navbar">
      <div className="nav-wrapper">
        <img src={BrandLogo} alt="Brand Logo" />
        <p className="brand">
        <strong>Stop Struggling</strong> with Your Teen</p>
        <a 
          onClick={props.toggleMenu}
          className={props.showMenu === "active" ? "menu-button active" : "menu-button"}
        >
          <span />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
