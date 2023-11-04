import { FunctionComponent } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import "./Desktop1.css";

const Desktop1: FunctionComponent = () => {
  return (
    <div className="desktop-1">
      <div className="footer-section">
        <div className="rectangle-parent">
          <img className="frame-child" alt="" src="/rectangle-186@2x.png" />
          <div className="share-your-travels-form1">
            <div className="form-header1">
              <b className="form-title-subtext1">subscribe to our newsletter</b>
              <b className="form-title1">Get weekly updates</b>
            </div>
            <div className="form1">
              <div className="form-text1">
                <div className="fill-in-your">
                  Fill in your details to join the party!
                </div>
              </div>
              <div className="form-fields1">
                <div className="form-text1">
                  <TextField
                    className="input4"
                    color="primary"
                    label="Your name"
                    size="medium"
                    variant="outlined"
                    type="text"
                  />
                </div>
                <div className="form-text1">
                  <TextField
                    className="input4"
                    color="primary"
                    label="Email address"
                    size="medium"
                    variant="outlined"
                    type="text"
                  />
                </div>
              </div>
              <button className="button">
                <div className="unstyledbutton">
                  <div className="button1">submit</div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <footer className="footer1">
          <div className="fickleflight-bio">
            <img className="logo-icon" alt="" src="/logo.svg" />
            <div className="fickle-flight-is">
              Fickle Flight is your one-stop travel portal. We offer hassle free
              flight and hotel bookings. We also have all your flight needs in
              you online shop.
            </div>
            <img className="social-icons" alt="" src="/social-icons.svg" />
          </div>
          <div className="footer-child" />
          <div className="footer-links">
            <div className="company">
              <a className="about-us">About Us</a>
              <div className="company1">Company</div>
              <div className="news">News</div>
              <div className="careers">Careers</div>
              <div className="how-we-work">How we work</div>
            </div>
            <div className="company">
              <div className="account">Account</div>
              <div className="support1">Support</div>
              <div className="support-center">Support Center</div>
              <div className="faq">FAQ</div>
              <div className="accessibility">Accessibility</div>
            </div>
            <div className="more">
              <div className="covid-advisory">Covid Advisory</div>
              <div className="more1">More</div>
              <div className="airline-fees">Airline Fees</div>
              <div className="tips">Tips</div>
              <div className="how-we-work">Quarantine Rules</div>
            </div>
          </div>
        </footer>
      </div>
      <div className="div">
        <div className="container">
          <div className="row">
            <div className="main-content">
              <b className="h2">Services</b>
              <div className="paragraph">
                Tailored Consulting for Digital Excellence
              </div>
            </div>
          </div>
        </div>
        <div className="container1">
          <div className="row1">
            <div className="col-md-4">
              <div className="card-item">
                <div className="flex-row">
                  <img
                    className="icn-arrow-right-icn-xs"
                    alt=""
                    src="/icn-arrowright-icnxs.svg"
                  />
                  <div className="div1">
                    <b className="h5"> IT Architecture Planning</b>
                    <div className="h6">
                      Tailored IT architecture planning to align infrastructure
                      with project objectives.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-item">
                <div className="flex-row">
                  <img
                    className="icn-arrow-right-icn-xs"
                    alt=""
                    src="/icn-arrowright-icnxs.svg"
                  />
                  <div className="div2">
                    <b className="h5">DevOps Strategy</b>
                    <div className="h61">
                      Streamlined development and deployment processes with
                      automation and collaboration.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-item">
                <div className="flex-row2">
                  <img
                    className="icn-arrow-right-icn-xs"
                    alt=""
                    src="/icn-arrowright-icnxs.svg"
                  />
                  <div className="div3">
                    <b className="h5">Backend Development</b>
                    <div className="h62">
                      Craft powerful and scalable server-side solutions using
                      the latest technologies.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row1">
            <div className="col-md-4">
              <div className="card-item">
                <div className="flex-row2">
                  <img
                    className="icn-arrow-right-icn-xs"
                    alt=""
                    src="/icn-arrowright-icnxs.svg"
                  />
                  <div className="div4">
                    <b className="h5">Frontend Development</b>
                    <div className="h62">
                      Create user-friendly and visually appealing interfaces for
                      seamless user experiences.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-item">
                <div className="flex-row2">
                  <img
                    className="icn-arrow-right-icn-xs"
                    alt=""
                    src="/icn-arrowright-icnxs.svg"
                  />
                  <div className="div4">
                    <b className="h5">UX Design</b>
                    <div className="h62">
                      Design intuitive and engaging user experiences through
                      research and wireframes.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-item">
                <div className="flex-row2">
                  <img
                    className="icn-arrow-right-icn-xs"
                    alt=""
                    src="/icn-arrowright-icnxs.svg"
                  />
                  <div className="div4">
                    <b className="h5">Project Consulting</b>
                    <div className="h62">
                      Comprehensive consulting for technology choices, scope,
                      and risk management.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row1">
            <div className="col-md-4">
              <div className="card-item">
                <div className="flex-row2">
                  <img
                    className="icn-arrow-right-icn-xs"
                    alt=""
                    src="/icn-arrowright-icnxs.svg"
                  />
                  <div className="div4">
                    <b className="h5">Scalability Solutions</b>
                    <div className="h62">
                      Ensure efficient project growth and scalability to meet
                      increased demand.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-item">
                <div className="flex-row2">
                  <img
                    className="icn-arrow-right-icn-xs"
                    alt=""
                    src="/icn-arrowright-icnxs.svg"
                  />
                  <div className="div4">
                    <b className="h5">Security Consulting</b>
                    <div className="h62">
                      Protect digital assets through comprehensive security
                      consulting and best practices.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-item">
                <div className="flex-row2">
                  <img
                    className="icn-arrow-right-icn-xs"
                    alt=""
                    src="/icn-arrowright-icnxs.svg"
                  />
                  <div className="div4">
                    <b className="h5">Technology Integration</b>
                    <div className="h62">
                      Seamlessly integrate the latest technologies for
                      compatibility and reliability.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row4">
        <div className="main-content1">
          <b className="h2-feature-section1">Who we are ?</b>
          <div className="paragraph1">
            We are a highly skilled team of IT architects, DevOps experts,
            backend and frontend developers, and designers. Our mission is to
            provide expert guidance and consulting services to help your company
            bring your digital projects to life. Whether you're a startup, a
            small business, or a large enterprise, we have the expertise to
            empower your success in the digital realm.
          </div>
        </div>
      </div>
      <div className="search-section">
        <div className="banner-gradient" />
        <img
          className="banner-background"
          alt=""
          src="/banner--background@2x.png"
        />
        <div className="search-container">
          <div className="title">
            <div className="empowering-digital-transformat-container">
              <p className="empowering-digital-transformat1">
                Empowering Digital Transformation
              </p>
              <p className="empowering-digital-transformat1">
                Your IT Consulting Partner
              </p>
            </div>
            <div className="turning-your-it">
              Turning Your IT Dreams into Reality
            </div>
          </div>
        </div>
        <div className="social-media-group">
          <div className="social-media-icons">
            <img className="twitter-1-icon" alt="" src="/twitter-1@2x.png" />
            <img className="github-1-icon" alt="" src="/github-1@2x.png" />
            <img className="linkedin-1-icon" alt="" src="/linkedin-1@2x.png" />
            <img
              className="world-wide-web-1-icon"
              alt=""
              src="/worldwideweb-1@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="navs">
        <div className="logo">
          <img className="logo-child" alt="" src="/star-1.svg" />
          <div className="logo1">Logo</div>
        </div>
        <div className="nav-links">
          <Button className="who-we-are" color="primary" variant="text">
            Home
          </Button>
          <Button className="who-we-are" color="primary" variant="text">
            About
          </Button>
          <Button className="who-we-are" color="primary" variant="text">
            Pricing
          </Button>
          <Button className="who-we-are" color="primary" variant="contained">
            Get in touch
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Desktop1;
