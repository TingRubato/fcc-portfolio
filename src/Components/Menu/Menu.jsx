import React from 'react';
import SocialLinks from '../SocialLinks';
import './Menu.css';

const Menu = props => {
  return (
    <div className={`menu-container ${props.showMenu}`}>
      <div className="overlay" />
      <div className="menu-items">
        <ul>
          <li>
            <a href="/#welcome-section" onClick={props.toggleMenu}>
              HOME
            </a>
          </li>
          <li>
            <a href="/#about" onClick={props.toggleMenu}>
              About the Book
            </a>
          </li>
          <li>
            <a href="/#author" onClick={props.toggleMenu}>
              About Evonne Weinhaus
            </a>
          </li>
          <li>
            <a href="/speakings" onClick={props.toggleMenu}>
              SPEAKING
            </a>
          </li>
          <li>
            <a href="/#contact" onClick={props.toggleMenu}>
              CONTACT
            </a>
          </li>
        </ul>
        <SocialLinks />
      </div>
    </div>
  );
};

export default Menu;
