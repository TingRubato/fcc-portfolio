import React, { Component } from "react";

import Menu from "./Components/Menu/Menu";
import Nav from "./Components/Nav/Nav";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Book from "./Components/Book/Book";
// import Projects from "./Components/Projects/Projects";
import Preview from "./Components/Preview/Preview";
import Author from "./Components/Author/Author";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Testimonial from "./Components/Testimonial/Testimonial";
import Client from "./Components/Clients/Client";
import FreeResources from "./Components/FreeResources/FreeResources";
class App extends Component {
  state = {
    menuState: false,
  };

  toggleMenu = () => {
    this.setState((state) => ({
      menuState: !state.menuState
        ? "active"
        : state.menuState === "deactive"
          ? "active"
          : "deactive",
    }));
  };

  render() {
    return (
      <React.Fragment>
        <Menu toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
        <Nav toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
        <Header />
        <About />
        <Book />
        <Preview />
        <Author />
        <Testimonial />
        <Client />
        <FreeResources />
        <Contact />
        <Footer />
      </React.Fragment>
    );
  }

  // Parallax effect. Pretty heavy for slow devices.
  componentDidMount() {
    const navbar = document.querySelector("#navbar");
    const header = document.querySelector("#welcome-section");
    const forest = document.querySelector(".forest");
    const silhouette = document.querySelector(".silhouette");
    const testimonial = document.querySelector("#testimonial");
    let forestInitPos = -300;

    window.onscroll = () => {
      let scrollPos =
        document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
        header.style.visibility =
          header.style.visibility === "hidden" && "visible";
      else header.style.visibility = "hidden";

      if (scrollPos + 100 >= window.innerHeight)
        navbar.classList.add("bg-active");
      else navbar.classList.remove("bg-active");
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      internalLinks.forEach((link) => {
        const hash = link.hash;
        if (hash && document.querySelector(hash)) {
          link.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(hash).scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          });
        }
      });
    })();
  }
}

export default App;
