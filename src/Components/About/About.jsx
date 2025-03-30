import React from "react";
import "./About.css";
import BookImage from "../../Images/book-magnified.jpg";

const About = (props) => {
  return (
    <section id="about">
      <div className="wrapper">
        <article>
          <div className="title">
            <h3>Do you want to argue less and connect more with your teen?</h3>
            <p>
              My passion is to help parents empower both their teens and empower
              themselves. My belief is that conflict can be a catalyst for
              change instead of fueling never-ending power struggles.
            </p>
            <p className="separator" />
          </div>
          <div className="desc full">
            <h4 className="subtitle">Are you...</h4>
            <p>
              Tired of repeating everything three times and not being heard?
            </p>
            <p>Drained from daily arguing?</p>
            <p>Eventually, giving in to your teen?</p>
            <p>Do you want to be closer, more connected, with your teen?</p>
          </div>
          <div className="title">
            <h3>If so</h3>
            <p className="separator" />
          </div>
          <div className="desc">
            <h4 className="subtitle">Stop Struggling with your teen</h4>
            <img
              className="book-cover"
              src={BookImage}
              alt="Stop Struggling with your teen book cover"
            />
          </div>
          <div className="desc">
            <h4 className="subtitle">If so...</h4>
            <p>
              you are like many other parents. I believe in some strange and
              wonderful way, fighting and connecting are directly related to one
              another. Yes, the arguing is the observable behavior, the
              symptom…and may I add, usually very visible and very loud.
              <br />
              <br />
              What lies underneath this symptom- the arguing- is the desire to
              connect, the desire to be heard, the desire to be seen. So many
              times, both parents and teens don’t know there is a totally
              different way to go about it. I hope the Stop Struggling approach
              will serve as your roadmap, providing you with the concrete tools
              for arguing less and connecting more with your teen.{" "}
            </p>
            <p />
          </div>
        </article>
        <div className="hyperlink">
            <a href="https://evonneweinhaus.com" target="_blank" rel="noopener noreferrer">
                Learn more about Evonne Weinhaus
            </a>
        </div>
      </div>
    </section>
  );
};

export default About;
