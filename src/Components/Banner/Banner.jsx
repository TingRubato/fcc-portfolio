import React, { useEffect } from "react";
import { gsap } from "gsap";
import CustomEase from "gsap/CustomEase";
import "./Banner.css";
import oldCover from "../../Images/cover.jpg";
import republishedCover from "../../Images/republished-2016.jpg";
const Banner = () => {
  useEffect(() => {
    gsap.registerPlugin(CustomEase);
    CustomEase.create("bookEase", "0.25, 1, 0.5, 1");
    // Apply hover animations to each book item
    const books = document.querySelectorAll(".books__item");
    books.forEach((book) => {
      const hitbox = book.querySelector(".books__hitbox");
      const bookImage = book.querySelector(".books__image");
      const bookEffect = book.querySelector(".books__effect");
      const pages = book.querySelectorAll(".books__page");
      const bookLight = book.querySelector(".books__light");
  
      // Set initial state for cover image and light effect
      gsap.set(bookImage, {
        boxShadow:
          "0 10px 20px rgba(0,0,0,0.15), 0 30px 45px rgba(0,0,0,0.12), 0 60px 80px rgba(0,0,0,0.1)"
      });
  
      gsap.set(bookLight, {
        opacity: 0.1,
        rotateY: 0
      });
  
      // Set initial state for pages - all stacked at 0
      gsap.set(pages, {
        x: 0
      });
  
      // Create hover animation timeline (paused by default)
      const hoverIn = gsap.timeline({ paused: true });
  
      // Add the book cover animation
      hoverIn.to(
        bookImage,
        {
          duration: 0.7,
          rotateY: -12,
          translateX: -6,
          scaleX: 0.96,
          boxShadow:
            "10px 10px 20px rgba(0,0,0,0.25), 20px 20px 40px rgba(0,0,0,0.2), 40px 40px 60px rgba(0,0,0,0.15)",
          ease: "bookEase"
        },
        0
      );
  
      // Add the book effect animation
      hoverIn.to(
        bookEffect,
        {
          duration: 0.7,
          marginLeft: 10,
          ease: "bookEase"
        },
        0
      );
  
      // Add the light effect animation
      hoverIn.to(
        bookLight,
        {
          duration: 0.7,
          opacity: 0.2,
          rotateY: -12,
          ease: "bookEase"
        },
        0
      );
  
      // Add the page animations to the same timeline
      if (pages.length) {
        hoverIn.to(
          pages[0],
          {
            x: "4px",
            duration: 0.7,
            ease: "power1.inOut"
          },
          0
        );
  
        hoverIn.to(
          pages[1],
          {
            x: "2px",
            duration: 0.7,
            ease: "power1.inOut"
          },
          0
        );
  
        hoverIn.to(
          pages[2],
          {
            x: "0px",
            duration: 0.7,
            ease: "power1.inOut"
          },
          0
        );
      }
  
    hitbox.addEventListener("mouseenter", () => hoverIn.play());
    hitbox.addEventListener("mouseleave", () => hoverIn.reverse());
  });
}, []);

  return (
    <section id="banner">
      <div class="container">
        <div class="top-left">
          <h2>Stop Struggling with Your Teen</h2>
        </div>
        <div class="top-right">
          <div class="circle circle1"></div>
          <div class="circle circle2"></div>
        </div>
        <div class="main-content">
          <div class="left-text">
          <p>Authored by</p>
            <h2>Evonne Weinhaus</h2>
            <p>
            "The short of it: My mission is to provide a clear path for parents to reconnect with their teens. I have over 30 years of expertise to draw from. With this ground- breaking book, I have educated hundreds of thousands of parents, and the Stop Struggling book series has sold over 250,000 copies plus won the Child’s Magazine award for Excellence in Family Issues."
            </p>
          </div>
          <div class="books-wrapper">
            <div class="books__item">
              <div class="books__container">
                <div class="books__cover">
                  <div class="books__back-cover"></div>
                  <div class="books__inside">
                    <div class="books__page"></div>
                    <div class="books__page"></div>
                    <div class="books__page"></div>
                  </div>
                  <div class="books__image">
                    <img
                      src={oldCover}
                      alt="Published in March 1, 1988"
                    />
                    <div class="books__effect"></div>
                    <div class="books__light"></div>
                  </div>
                  <div class="books__hitbox" data-book-index="0"></div>
                </div>
              </div>
              <div class="books__title">
                originally republished on 
                <br />
                March 1, 1988
                </div>
            </div>
            <div class="books__item">
              <div class="books__container">
                <div class="books__cover">
                  <div class="books__back-cover"></div>
                  <div class="books__inside">
                    <div class="books__page"></div>
                    <div class="books__page"></div>
                    <div class="books__page"></div>
                  </div>
                  <div class="books__image">
                    <img
                      src={republishedCover}
                      alt="Psychedelics and Mental Health by Irene de Caso"
                    />
                    <div class="books__effect"></div>
                    <div class="books__light"></div>
                  </div>
                  <div class="books__hitbox" data-book-index="1"></div>
                </div>
              </div>
              <div class="books__title">
                republished on<br />
                March 25, 2019</div>
            </div>
          </div>
          <div class="right-text">
            <h2>Featured in</h2>
            <p>
           PUBLISHER'S WEEKLY,<br></br> LIBRARY JOURNAL,<br></br> CHRISTIAN SCIENCE MONITOR, and<br></br>KNIGHT RYDER SYNDICATE
           </p>
          </div>
        </div>
        <div class="bottom-center">
          <a>Get a Free Sample</a>
        </div>
      </div>
    </section>
  );
};
    
export default Banner;
