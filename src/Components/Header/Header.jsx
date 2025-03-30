import React from 'react';
import './Header.css';

const Header = props => {
  return (
    <header id="welcome-section">
      <div className="forest" />
      <div className="silhouette" />
      <div className="moon" />
      <div className="container">
        <h1>
          <span className="line"> Do you want to
            <span className="color"> connect MORE</span>
          </span>
          <span className="line"> and
          <span className="color"> argue Less </span>
           with your Teen?</span>
        </h1>
        <h2>
          STOP STRUGGLING WITH YOUR TEEN
        </h2>
        <h3>
          A complete and easy-to-use guide from Evonne Weinhaus
         </h3>
        <div className="buttons">
          <a href="#projects">About</a>
          <a href="#contact" className="cta">
            Student Portal
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
