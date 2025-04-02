import React from "react";
import "./Client.css";

import TodayLogo from "../../Images/clients/Today_logo.svg";
import Donahue from "../../Images/clients/donahue.png";
import FamilyCircle from "../../Images/clients/familycircle.png";
import Godday from "../../Images/clients/godday.jpg";
import GoodMorningAmerica from "../../Images/clients/goodmorningamerica.png";
import McCalls from "../../Images/clients/mccalls.png";
import Oprah from "../../Images/clients/oprah.png";
import Sally from "../../Images/clients/sally.webp";
import WomensDay from "../../Images/clients/womens-day-logo.png";
import WorkingMother from "../../Images/clients/workingmother.png";

const logos = [
  { src: TodayLogo, alt: "Today Show" },
  { src: Donahue, alt: "Donahue" },
  { src: FamilyCircle, alt: "Family Circle" },
  { src: Godday, alt: "Godday" },
  { src: GoodMorningAmerica, alt: "Good Morning America" },
  { src: McCalls, alt: "McCall's" },
  { src: Oprah, alt: "Oprah Winfrey Show" },
  { src: Sally, alt: "Sally" },
  { src: WomensDay, alt: ",Woman's Day" },
  { src: WorkingMother, alt: "Working Mother" },
];

const Client = () => {
  return (
    <section id="clients">
         <div className="logo-wall">
          <div className="clients">
            <div className="heading">
              <div className="title">Evonne's Past Clients Include:</div>
              <div className="seperator" />
              <div className="floatlist">
                <ul className="list">
                  <li>ABC Atlas Moving</li>
                  <li>American Express</li>
                  <li>Baptist Medical Center of Oklahoma</li>
                  <li>CNA</li>
                  <li>Comp USA</li>
                  <li>Construction Specifications Institute</li>
                  <li>Farmers of America</li>
                  <li>GenMark</li>
                  <li>Graebel Van Lines</li>
                  <li>Hewlett Packard</li>
                  <li>Institute of Management Accountants</li>
                  <li>Marriott Corporation</li>
                  <li>Merck &amp; Company</li>
                  <li>Methodist Rich Young Hospital</li>
                  <li>Midwest Employee Relocation Council</li>
                  <li>National Association of Service Managers</li>
                  <li>National Association of Women Business Owners</li>
                  <li>Professional Saleswoman</li>
                  <li>Prudential Relocation</li>
                  <li>Ralston Purina</li>
                  <li>MCI/World Com</li>
                </ul>
              </div>
            </div>
        </div>
        <div className="marquee">
          <div className="marquee__group">
            {logos.map((logo, index) => (
              <div className="marquee__item" key={`normal1-${index}`}>
                <img src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </div>
          <div className="marquee__group" aria-hidden="true">
            {logos.map((logo, index) => (
              <div className="marquee__item" key={`normal2-${index}`}>
                <img src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </div>
        </div>
        <div className="marquee marquee--reverse">
          <div className="marquee__group">
            {logos.map((logo, index) => (
              <div className="marquee__item" key={`reverse1-${index}`}>
                <img src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </div>
          <div className="marquee__group" aria-hidden="true">
            {logos.map((logo, index) => (
              <div className="marquee__item" key={`reverse2-${index}`}>
                <img src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
