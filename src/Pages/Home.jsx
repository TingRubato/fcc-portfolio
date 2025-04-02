import React from "react";
import Header from "../Components/Header/Header";
import About from "../Components/About/About";
import Book from "../Components/Book/Book";
import Preview from "../Components/Preview/Preview";
import Author from "../Components/Author/Author";
import Testimonial from "../Components/Testimonial/Testimonial";
import Client from "../Components/Clients/Client";
import Banner from "../Components/Banner/Banner";
import FreeResources from "../Components/FreeResources/FreeResources";
import Footer from "../Components/Footer/Footer";
import Contact from "../Components/Contact/Contact";

const Home = () => (
  <body>
    <Header />
    <About />
    <Banner />
    <Book />
    <Preview />
    <Author />
    <Testimonial />
    <Client />
    <FreeResources />
    <Contact />
  </body>
);

export default Home;