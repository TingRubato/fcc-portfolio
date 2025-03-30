import React from "react";
import Header from "../Components/Header/Header";
import About from "../Components/About/About";
import Book from "../Components/Book/Book";
import Preview from "../Components/Preview/Preview";
import Author from "../Components/Author/Author";
import Testimonial from "../Components/Testimonial/Testimonial";
import Client from "../Components/Clients/Client";
import FreeResources from "../Components/FreeResources/FreeResources";

const Home = () => (
  <>
    <Header />
    <About />
    <Book />
    <Preview />
    <Author />
    <Testimonial />
    <Client />
    <FreeResources />
  </>
);

export default Home;