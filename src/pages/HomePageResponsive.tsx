import { FunctionComponent, useCallback, useEffect } from "react";
import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import styles from "./HomePageResponsive.module.css";

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
            targetElement.classList.add(styles.animate);
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

  const onHeaderLinksContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='shareYourTravelsSection']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "end", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.homePageResponsive}>
      <div className={styles.headerSection}>
        <div className={styles.headerElementsRow}>
          <button className={styles.headerLogo} data-animate-on-scroll>
            <img
              className={styles.captureDCran20231105081Icon}
              alt=""
              src="/capture-d-cran-20231105-081136removebgpreview-1@2x.png"
            />
          </button>
          <div className={styles.headerMenuOptionsRow} data-animate-on-scroll>
            <div className={styles.vectorParent}>
              <Button
                className={styles.frameChild}
                sx={{ width: 118 }}
                color="secondary"
                variant="text"
              >
                Home
              </Button>
              <Button
                className={styles.frameItem}
                sx={{ width: 118 }}
                color="secondary"
                variant="text"
              >
                Our Team
              </Button>
              <Button
                className={styles.frameInner}
                sx={{ width: 118 }}
                color="secondary"
                variant="text"
              >
                BLOG
              </Button>
            </div>
            <div
              className={styles.headerLinks}
              onClick={onHeaderLinksContainerClick}
            >
              <Button
                className={styles.frameChild}
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
      <div className={styles.mainSection}>
        <img
          className={styles.heroBackgroundImage}
          alt=""
          src="/hero-background-image@2x.png"
        />
        <div className={styles.mainContainer}>
          <div className={styles.mainContentContainer}>
            <div className={styles.mainTexts}>
              <div className={styles.mainTitle}>
                <p className={styles.empoweringDigitalTransformat}>
                  <span
                    className={styles.empoweringDigital}
                  >{`Empowering Digital `}</span>
                  <span>Transformation</span>
                </p>
                <p className={styles.empoweringDigitalTransformat}>
                  Your IT Consulting Partner
                </p>
              </div>
              <div className={styles.mainDescription}>
                Turning Your IT Dreams into Reality
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.featuredDestinationSection}>
        <div className={styles.featuredImageContainer}>
          <img
            className={styles.featuredImageIcon}
            alt=""
            src="/featured-image@2x.png"
            data-animate-on-scroll
          />
        </div>
        <div className={styles.featuredDestinationBlurb}>
          <div className={styles.featuredDestinationCopywriti}>
            <div className={styles.featuredDestinationTitle}>Who we are ?</div>
            <div className={styles.featuredDestinationDescriptiContainer}>
              <span className={styles.weAreA}>
                We are a highly skilled team of
              </span>
              <b> IT</b>
              <span className={styles.weAreA}>{` `}</span>
              <b>architects</b>
              <span className={styles.weAreA}>{`, `}</span>
              <b>DevOps experts</b>
              <span className={styles.weAreA}>{`, `}</span>
              <b>backend</b>
              <span className={styles.weAreA}>{` and `}</span>
              <b>frontend developers, and designers</b>
              <span
                className={styles.weAreA}
              >{`. Our mission is to provide `}</span>
              <b>expert guidance</b>
              <span className={styles.weAreA}>{` and `}</span>
              <b>consulting services</b>
              <span
                className={styles.weAreA}
              >{` to help your company bring your `}</span>
              <b>digital projects</b>
              <span
                className={styles.weAreA}
              >{` to life. Whether you're a `}</span>
              <b>startup</b>
              <span className={styles.weAreA}>{`, a `}</span>
              <b>small business</b>
              <span className={styles.weAreA}>{`, or a `}</span>
              <b>large enterprise</b>
              <span className={styles.weAreA}>{`, we have the `}</span>
              <b>expertise</b>
              <span className={styles.weAreA}>{` to `}</span>
              <b>empower</b>
              <span className={styles.weAreA}>{` your success in the `}</span>
              <b>digital realm</b>
              <span className={styles.weAreA}>.</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.discoverTheWorldSection}>
        <div className={styles.discoverTheWorldHeader}>
          <b className={styles.discoverTheWorld}>Services</b>
          <b className={styles.discoverTheWorld1}>
            Tailored Consulting for Digital Excellence
          </b>
        </div>
        <div className={styles.locationCardsRow}>
          <div className={styles.itArchParent}>
            <div className={styles.itArch}>
              <img
                className={styles.icelandCardImage}
                alt=""
                src="/iceland-card-image@2x.png"
                data-animate-on-scroll
              />
              <div className={styles.cardTitle}>
                <div className={styles.itArchitecturePlanning}>
                  {" "}
                  IT Architecture Planning
                </div>
                <div className={styles.tailoredItArchitecture}>
                  Tailored IT architecture planning to align infrastructure with
                  project objectives.
                </div>
              </div>
            </div>
            <div className={styles.devops}>
              <img
                className={styles.icelandCardImage}
                alt=""
                src="/italy-card-image@2x.png"
                data-animate-on-scroll
              />
              <div className={styles.cardTitle1}>
                <div className={styles.itArchitecturePlanning}>
                  DevOps Strategy
                </div>
                <div className={styles.streamlinedDevelopmentAnd}>
                  Streamlined development and deployment processes with
                  automation and collaboration.
                </div>
              </div>
            </div>
            <div className={styles.backend}>
              <img
                className={styles.icelandCardImage}
                alt=""
                src="/italy-card-image1@2x.png"
                data-animate-on-scroll
              />
              <div className={styles.cardTitle1}>
                <div className={styles.itArchitecturePlanning}>
                  Backend Development
                </div>
                <div className={styles.craftPowerfulAnd}>
                  Craft powerful and scalable server-side solutions using the
                  latest technologies.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.itArchGroup}>
          <div className={styles.itArch1}>
            <img
              className={styles.icelandCardImage}
              alt=""
              src="/iceland-card-image1@2x.png"
              data-animate-on-scroll
            />
            <div className={styles.cardTitle1}>
              <div className={styles.itArchitecturePlanning}>
                Frontend Development
              </div>
              <div className={styles.createUserFriendlyAnd}>
                Create user-friendly and visually appealing interfaces for
                seamless user experiences.
              </div>
            </div>
          </div>
          <div className={styles.devops1}>
            <img
              className={styles.icelandCardImage}
              alt=""
              src="/italy-card-image2@2x.png"
              data-animate-on-scroll
            />
            <div className={styles.cardTitle4}>
              <div className={styles.itArchitecturePlanning}>UX Design</div>
              <div className={styles.designIntuitiveAnd}>
                Design intuitive and engaging user experiences through research
                and wireframes.
              </div>
            </div>
          </div>
          <div className={styles.backend1}>
            <img
              className={styles.icelandCardImage}
              alt=""
              src="/italy-card-image3@2x.png"
              data-animate-on-scroll
            />
            <div className={styles.cardTitle1}>
              <div className={styles.projectConsulting}>Project Consulting</div>
              <div className={styles.comprehensiveConsultingFor}>
                Comprehensive consulting for technology choices, scope, and risk
                management.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.itArchGroup}>
          <div className={styles.itArch1}>
            <img
              className={styles.icelandCardImage}
              alt=""
              src="/iceland-card-image2@2x.png"
              data-animate-on-scroll
            />
            <div className={styles.cardTitle6}>
              <div className={styles.itArchitecturePlanning}>
                Scalability Solutions
              </div>
              <div className={styles.ensureEfficientProject}>
                Ensure efficient project growth and scalability to meet
                increased demand.
              </div>
            </div>
          </div>
          <div className={styles.backend1}>
            <img
              className={styles.icelandCardImage}
              alt=""
              src="/italy-card-image4@2x.png"
              data-animate-on-scroll
            />
            <div className={styles.cardTitle7}>
              <div className={styles.securityConsulting}>
                Security Consulting
              </div>
              <div className={styles.protectDigitalAssets}>
                Protect digital assets through comprehensive security consulting
                and best practices.
              </div>
            </div>
          </div>
          <div className={styles.backend1}>
            <img
              className={styles.icelandCardImage}
              alt=""
              src="/italy-card-image5@2x.png"
              data-animate-on-scroll
            />
            <div className={styles.cardTitle8}>
              <div className={styles.itArchitecturePlanning}>
                Technology Integration
              </div>
              <div className={styles.seamlesslyIntegrateThe}>
                Seamlessly integrate the latest technologies for compatibility
                and reliability.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={styles.shareYourTravelsSection}
        data-scroll-to="shareYourTravelsSection"
      >
        <img
          className={styles.shareYourTravelsSectionBac}
          alt=""
          src="/share-your-travels-section-background-image@2x.png"
        />
        <div className={styles.shareYourTravelsForm}>
          <div className={styles.formHeader}>
            <b className={styles.formTitleSubtext}>
              Let’s Make your dream true
            </b>
            <div className={styles.formTitle}>Make your project real</div>
          </div>
          <form className={styles.form}>
            <div className={styles.formText}>
              <div className={styles.shareYourVision}>Share your vision</div>
              <div className={styles.shareYourInnovative}>
                Share your innovative concept by completing the form below, and
                our dedicated sales team will reach out to you within the next
                48 hours!
              </div>
            </div>
            <div className={styles.formFields}>
              <div className={styles.destinationNameInput}>
                <TextField
                  className={styles.input}
                  color="primary"
                  label="Destination name"
                  size="medium"
                  variant="outlined"
                  type="text"
                />
              </div>
              <div className={styles.destinationNameInput}>
                <TextField
                  className={styles.input}
                  color="primary"
                  label="Your name"
                  size="medium"
                  variant="outlined"
                  type="text"
                />
              </div>
              <div className={styles.destinationNameInput}>
                <TextField
                  className={styles.input}
                  color="primary"
                  label="Your name"
                  size="medium"
                  variant="outlined"
                  type="text"
                />
              </div>
              <div className={styles.destinationNameInput}>
                <TextField
                  className={styles.input3}
                  color="primary"
                  rows={4}
                  label="Describe what kind of photos you want to focus on"
                  variant="outlined"
                  multiline
                />
              </div>
            </div>
            <button className={styles.formSubmitButton}>
              <div className={styles.submit}>Submit</div>
            </button>
          </form>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.copyrightInformation}>
          © 2023, Digital Crafters. All Rights Reserved.
        </div>
        <img
          className={styles.footerLinksIcon}
          alt=""
          src="/footer-links.svg"
        />
      </div>
    </div>
  );
};

export default HomePageResponsive;
