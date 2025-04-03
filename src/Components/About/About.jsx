import React from "react";
import "./About.css";
import BookImage from "../../Images/book-magnified.jpg";
import HelloVideo from "../../Media/evonne-weinhaus-video-0619.mp4";
const About = (props) => {
  return (
    <section id="about">
      <div className="wrapper">
        <script src="https://vjs.zencdn.net/8.22.0/video.min.js"></script>

        <article>
          <div>
            <video
              id="my-video"
              class="video-js"
              controls="true"
              muted="true"
              preload="none"
              data-setup='{  "playbackRates": [1, 1.5, 2] }'
              style={{
                zIndex: 100,
                position: "relative",
                height: "30vh",
                margin: "0 auto",
                marginTop: "20px",
              }}
            >
              <source src={HelloVideo} type="video/mp4" />
            </video>
          </div>

          <div className="desc full">
            <div className="title">
              <h3>
                Do you want to argue less and connect more with your teen?
              </h3>
              <p className="separator" />
              <p>
                My passion is to help parents empower both their teens and
                empower themselves. My belief is that conflict can be a catalyst
                for change instead of fueling never-ending power struggles.
              </p>
            </div>
            <div className="title">
              <h3 className="subtitle">Are you...</h3>
              <p className="separator" />
              <p>
              Tired of repeating everything three times and not being heard?
              </p>
              <p>Drained from daily arguing?</p>
              <p>Eventually, giving in to your teen?</p>
            </div>
            <div className="title">
                <h3 className="title">Do you want to...</h3>
                <p className="separator" />

                <p>be closer, more connected, with your teen?</p>
                <h3 className="subtitle">If so...</h3>
                <p className="separator" />
            <p>
              You are not alone. I have been there. I have worked with many
              parents who feel the same way. I have also worked with many teens
              who feel unheard and misunderstood. I have seen the power of
              connection and how it can change everything.
            </p>
            <h4 className="subtitle">You should get</h4>
            </div>
            </div>
        </article>
      <div class="sd-container">
              <div className="arrow"></div>
              <div className="arrow"></div>
        </div>
        </div>

    </section>
  );
};

export default About;
