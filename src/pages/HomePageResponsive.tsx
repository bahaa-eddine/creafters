import { FunctionComponent, useEffect } from "react";
import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import "./HomePageResponsive.css";

const HomePageResponsive: FunctionComponent = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className="home-page-responsive">
      <div className="header-section">
        <div className="header-elements-row">
          <button className="header-logo" data-animate-on-scroll>
            <img className="vector-icon" alt="" src="/vector.svg" />
            <img className="vector-icon1" alt="" src="/vector1.svg" />
          </button>
          <div className="header-menu-options-row" data-animate-on-scroll>
            <Button
              className="header-menu-options-row-child"
              sx={{ width: 118 }}
              color="secondary"
              variant="text"
            >
              Home
            </Button>
            <Button
              className="header-menu-options-row-child"
              sx={{ width: 118 }}
              color="secondary"
              variant="text"
            >
              Our Team
            </Button>
            <Button
              className="header-menu-options-row-child"
              sx={{ width: 118 }}
              color="secondary"
              variant="text"
            >
              BLOG
            </Button>
            <div className="header-links">
              <Button
                className="contact-us"
                sx={{ width: 151.9 }}
                color="secondary"
                variant="contained"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="main-section">
        <img
          className="hero-background-image"
          alt=""
          src="/hero-background-image@2x.png"
        />
        <div className="main-container">
          <div className="main-content-container">
            <div className="main-texts">
              <div className="main-title">
                <p className="empowering-digital-transformat">
                  <span className="empowering-digital">{`Empowering Digital `}</span>
                  <span>Transformation</span>
                </p>
                <p className="empowering-digital-transformat">
                  Your IT Consulting Partner
                </p>
              </div>
              <div className="main-description">
                Turning Your IT Dreams into Reality
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="featured-destination-section">
        <div className="featured-image-container">
          <img
            className="featured-image-icon"
            alt=""
            src="/featured-image@2x.png"
            data-animate-on-scroll
          />
        </div>
        <div className="featured-destination-blurb">
          <div className="featured-destination-copywriti">
            <div className="featured-destination-title">Who we are ?</div>
            <div className="featured-destination-descripti-container">
              <span className="we-are-a">We are a highly skilled team of</span>
              <b> IT</b>
              <span className="we-are-a">{` `}</span>
              <b>architects</b>
              <span className="we-are-a">{`, `}</span>
              <b>DevOps experts</b>
              <span className="we-are-a">{`, `}</span>
              <b>backend</b>
              <span className="we-are-a">{` and `}</span>
              <b>frontend developers, and designers</b>
              <span className="we-are-a">{`. Our mission is to provide `}</span>
              <b>expert guidance</b>
              <span className="we-are-a">{` and `}</span>
              <b>consulting services</b>
              <span className="we-are-a">{` to help your company bring your `}</span>
              <b>digital projects</b>
              <span className="we-are-a">{` to life. Whether you're a `}</span>
              <b>startup</b>
              <span className="we-are-a">{`, a `}</span>
              <b>small business</b>
              <span className="we-are-a">{`, or a `}</span>
              <b>large enterprise</b>
              <span className="we-are-a">{`, we have the `}</span>
              <b>expertise</b>
              <span className="we-are-a">{` to `}</span>
              <b>empower</b>
              <span className="we-are-a">{` your success in the `}</span>
              <b>digital realm</b>
              <span className="we-are-a">.</span>
            </div>
          </div>
        </div>
      </div>
      <div className="discover-the-world-section">
        <div className="discover-the-world-header">
          <b className="discover-the-world">Services</b>
          <b className="discover-the-world1">
            Tailored Consulting for Digital Excellence
          </b>
        </div>
        <div className="location-cards-row">
          <div className="it-arch-parent">
            <div className="it-arch">
              <img
                className="iceland-card-image"
                alt=""
                src="/iceland-card-image@2x.png"
                data-animate-on-scroll
              />
              <div className="card-title">
                <div className="it-architecture-planning">
                  {" "}
                  IT Architecture Planning
                </div>
                <div className="tailored-it-architecture">
                  Tailored IT architecture planning to align infrastructure with
                  project objectives.
                </div>
              </div>
            </div>
            <div className="devops">
              <img
                className="iceland-card-image"
                alt=""
                src="/italy-card-image@2x.png"
                data-animate-on-scroll
              />
              <div className="card-title1">
                <div className="it-architecture-planning">DevOps Strategy</div>
                <div className="streamlined-development-and">
                  Streamlined development and deployment processes with
                  automation and collaboration.
                </div>
              </div>
            </div>
            <div className="backend">
              <img
                className="iceland-card-image"
                alt=""
                src="/italy-card-image1@2x.png"
                data-animate-on-scroll
              />
              <div className="card-title1">
                <div className="it-architecture-planning">
                  Backend Development
                </div>
                <div className="craft-powerful-and">
                  Craft powerful and scalable server-side solutions using the
                  latest technologies.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="it-arch-group">
          <div className="it-arch1">
            <img
              className="iceland-card-image"
              alt=""
              src="/iceland-card-image1@2x.png"
              data-animate-on-scroll
            />
            <div className="card-title1">
              <div className="it-architecture-planning">
                Frontend Development
              </div>
              <div className="create-user-friendly-and">
                Create user-friendly and visually appealing interfaces for
                seamless user experiences.
              </div>
            </div>
          </div>
          <div className="devops1">
            <img
              className="iceland-card-image"
              alt=""
              src="/italy-card-image2@2x.png"
              data-animate-on-scroll
            />
            <div className="card-title4">
              <div className="it-architecture-planning">UX Design</div>
              <div className="design-intuitive-and">
                Design intuitive and engaging user experiences through research
                and wireframes.
              </div>
            </div>
          </div>
          <div className="backend1">
            <img
              className="iceland-card-image"
              alt=""
              src="/italy-card-image3@2x.png"
              data-animate-on-scroll
            />
            <div className="card-title1">
              <div className="project-consulting">Project Consulting</div>
              <div className="comprehensive-consulting-for">
                Comprehensive consulting for technology choices, scope, and risk
                management.
              </div>
            </div>
          </div>
        </div>
        <div className="it-arch-group">
          <div className="it-arch1">
            <img
              className="iceland-card-image"
              alt=""
              src="/iceland-card-image2@2x.png"
              data-animate-on-scroll
            />
            <div className="card-title6">
              <div className="it-architecture-planning">
                Scalability Solutions
              </div>
              <div className="ensure-efficient-project">
                Ensure efficient project growth and scalability to meet
                increased demand.
              </div>
            </div>
          </div>
          <div className="backend1">
            <img
              className="iceland-card-image"
              alt=""
              src="/italy-card-image4@2x.png"
              data-animate-on-scroll
            />
            <div className="card-title7">
              <div className="security-consulting">Security Consulting</div>
              <div className="protect-digital-assets">
                Protect digital assets through comprehensive security consulting
                and best practices.
              </div>
            </div>
          </div>
          <div className="backend1">
            <img
              className="iceland-card-image"
              alt=""
              src="/italy-card-image5@2x.png"
              data-animate-on-scroll
            />
            <div className="card-title8">
              <div className="it-architecture-planning">
                Technology Integration
              </div>
              <div className="seamlessly-integrate-the">
                Seamlessly integrate the latest technologies for compatibility
                and reliability.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="share-your-travels-section">
        <img
          className="share-your-travels-section-bac"
          alt=""
          src="/share-your-travels-section-background-image@2x.png"
        />
        <div className="share-your-travels-form">
          <div className="form-header">
            <b className="form-title-subtext">Let’s Make your dream true</b>
            <div className="form-title">Make your project real</div>
          </div>
          <form className="form">
            <div className="form-text">
              <div className="share-your-vision">Share your vision</div>
              <div className="share-your-innovative">
                Share your innovative concept by completing the form below, and
                our dedicated sales team will reach out to you within the next
                48 hours!
              </div>
            </div>
            <div className="form-fields">
              <div className="destination-name-input">
                <TextField
                  className="input"
                  color="primary"
                  label="Destination name"
                  size="medium"
                  variant="outlined"
                  type="text"
                />
              </div>
              <div className="destination-name-input">
                <TextField
                  className="input"
                  color="primary"
                  label="Your name"
                  size="medium"
                  variant="outlined"
                  type="text"
                />
              </div>
              <div className="destination-name-input">
                <TextField
                  className="input"
                  color="primary"
                  label="Your name"
                  size="medium"
                  variant="outlined"
                  type="text"
                />
              </div>
              <div className="destination-name-input">
                <TextField
                  className="input3"
                  color="primary"
                  rows={4}
                  label="Describe what kind of photos you want to focus on"
                  variant="outlined"
                  multiline
                />
              </div>
            </div>
            <button className="form-submit-button">
              <div className="submit">Submit</div>
            </button>
          </form>
        </div>
      </div>
      <div className="footer">
        <div className="copyright-information">
          © 2023, Digital Crafters. All Rights Reserved.
        </div>
        <img className="footer-links-icon" alt="" src="/footer-links.svg" />
      </div>
    </div>
  );
};

export default HomePageResponsive;
