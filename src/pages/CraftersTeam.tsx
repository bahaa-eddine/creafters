import { FunctionComponent, useCallback, useEffect } from "react";
import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./CraftersTeam.module.css";

const CraftersTeam: FunctionComponent = () => {
  const navigate = useNavigate();
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

  const onRectangleButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRectangleButton1Click = useCallback(() => {
    navigate("/crafters-team");
  }, [navigate]);

  const onHeaderLinksContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='shareYourTravelsSectionBac']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "end", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.craftersTeam}>
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
                onClick={onRectangleButtonClick}
              >
                Home
              </Button>
              <Button
                className={styles.frameItem}
                sx={{ width: 118 }}
                color="secondary"
                variant="text"
                onClick={onRectangleButton1Click}
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
                className={styles.contactUs}
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
      <div className={styles.featuredDestinationSection}>
        <div className={styles.discoverTheWorldHeader}>
          <b className={styles.discoverTheWorld}>Team</b>
          <b className={styles.discoverTheWorld1}>
            Get Acquainted with the Faces Behind Our Success
          </b>
        </div>
        <div className={styles.cards}>
          <div className={styles.row01}>
            <div className={styles.elementscard}>
              <div className={styles.imagePlaceholder}>
                <img
                  className={styles.pasteImageIcon}
                  alt=""
                  src="/paste-image@2x.png"
                />
              </div>
              <div className={styles.content}>
                <div className={styles.info}>
                  <div className={styles.title}>
                    <div className={styles.name}>Jocelyn Schleifer</div>
                    <div className={styles.jobTitle}>Software Engineer</div>
                  </div>
                  <div className={styles.thereAreMany}>
                    There are many variations of passages of Lorem Ipsum
                    available
                  </div>
                </div>
                <div className={styles.socialIcons}>
                  <div className={styles.icons}>
                    <img
                      className={styles.iconBox}
                      alt=""
                      src="/icon-box.svg"
                    />
                    <img
                      className={styles.iconBox}
                      alt=""
                      src="/icon-box1.svg"
                    />
                    <img
                      className={styles.iconBox}
                      alt=""
                      src="/icon-box2.svg"
                    />
                    <img
                      className={styles.iconBox3}
                      alt=""
                      src="/icon-box3.svg"
                    />
                    <img
                      className={styles.iconBox3}
                      alt=""
                      src="/icon-box4.svg"
                    />
                    <img
                      className={styles.iconBox3}
                      alt=""
                      src="/icon-box5.svg"
                    />
                    <img
                      className={styles.iconBox3}
                      alt=""
                      src="/icon-box6.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.elementscard}>
              <div className={styles.imagePlaceholder}>
                <img
                  className={styles.pasteImageIcon}
                  alt=""
                  src="/paste-image1@2x.png"
                />
              </div>
              <div className={styles.content}>
                <div className={styles.info}>
                  <div className={styles.title}>
                    <div className={styles.name}>Martin Donin</div>
                    <div className={styles.jobTitle}>Software Engineer</div>
                  </div>
                  <div className={styles.thereAreMany}>
                    There are many variations of passages of Lorem Ipsum
                    available
                  </div>
                </div>
                <div className={styles.socialIcons}>
                  <div className={styles.icons}>
                    <img
                      className={styles.iconBox}
                      alt=""
                      src="/icon-box.svg"
                    />
                    <img
                      className={styles.iconBox}
                      alt=""
                      src="/icon-box1.svg"
                    />
                    <img
                      className={styles.iconBox}
                      alt=""
                      src="/icon-box2.svg"
                    />
                    <img
                      className={styles.iconBox3}
                      alt=""
                      src="/icon-box3.svg"
                    />
                    <img
                      className={styles.iconBox3}
                      alt=""
                      src="/icon-box4.svg"
                    />
                    <img
                      className={styles.iconBox3}
                      alt=""
                      src="/icon-box5.svg"
                    />
                    <img
                      className={styles.iconBox3}
                      alt=""
                      src="/icon-box6.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.elementscard}>
              <div className={styles.imagePlaceholder}>
                <img
                  className={styles.pasteImageIcon}
                  alt=""
                  src="/paste-image2@2x.png"
                />
              </div>
              <div className={styles.content}>
                <div className={styles.info}>
                  <div className={styles.title}>
                    <div className={styles.name}>Jordyn Septimus</div>
                    <div className={styles.jobTitle}>Software Engineer</div>
                  </div>
                  <div className={styles.thereAreMany}>
                    There are many variations of passages of Lorem Ipsum
                    available
                  </div>
                </div>
                <div className={styles.socialIcons}>
                  <div className={styles.icons}>
                    <img
                      className={styles.iconBox}
                      alt=""
                      src="/icon-box.svg"
                    />
                    <img
                      className={styles.iconBox}
                      alt=""
                      src="/icon-box1.svg"
                    />
                    <img
                      className={styles.iconBox}
                      alt=""
                      src="/icon-box2.svg"
                    />
                    <img
                      className={styles.iconBox3}
                      alt=""
                      src="/icon-box3.svg"
                    />
                    <img
                      className={styles.iconBox3}
                      alt=""
                      src="/icon-box4.svg"
                    />
                    <img
                      className={styles.iconBox3}
                      alt=""
                      src="/icon-box5.svg"
                    />
                    <img
                      className={styles.iconBox3}
                      alt=""
                      src="/icon-box6.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.row01}>
            <div className={styles.elementscard}>
              <div className={styles.imagePlaceholder}>
                <img
                  className={styles.pasteImageIcon}
                  alt=""
                  src="/paste-image3@2x.png"
                />
              </div>
              <div className={styles.content}>
                <div className={styles.info}>
                  <div className={styles.title}>
                    <div className={styles.name}>Marilyn Levin</div>
                    <div className={styles.jobTitle}>Software Engineer</div>
                  </div>
                  <div className={styles.thereAreMany}>
                    There are many variations of passages of Lorem Ipsum
                    available
                  </div>
                </div>
                <div className={styles.socialIcons}>
                  <div className={styles.icons}>
                    <img
                      className={styles.iconBox}
                      alt=""
                      src="/icon-box.svg"
                    />
                    <img
                      className={styles.iconBox}
                      alt=""
                      src="/icon-box1.svg"
                    />
                    <img
                      className={styles.iconBox}
                      alt=""
                      src="/icon-box2.svg"
                    />
                    <img
                      className={styles.iconBox3}
                      alt=""
                      src="/icon-box3.svg"
                    />
                    <img
                      className={styles.iconBox3}
                      alt=""
                      src="/icon-box4.svg"
                    />
                    <img
                      className={styles.iconBox3}
                      alt=""
                      src="/icon-box5.svg"
                    />
                    <img
                      className={styles.iconBox3}
                      alt=""
                      src="/icon-box6.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.elementscard}>
              <div className={styles.imagePlaceholder}>
                <img
                  className={styles.pasteImageIcon}
                  alt=""
                  src="/paste-image4@2x.png"
                />
              </div>
              <div className={styles.content}>
                <div className={styles.info}>
                  <div className={styles.title}>
                    <div className={styles.name}>Lindsey Dokidis</div>
                    <div className={styles.jobTitle}>Software Engineer</div>
                  </div>
                  <div className={styles.thereAreMany}>
                    There are many variations of passages of Lorem Ipsum
                    available
                  </div>
                </div>
                <div className={styles.socialIcons}>
                  <div className={styles.icons}>
                    <img
                      className={styles.iconBox}
                      alt=""
                      src="/icon-box.svg"
                    />
                    <img
                      className={styles.iconBox}
                      alt=""
                      src="/icon-box1.svg"
                    />
                    <img
                      className={styles.iconBox}
                      alt=""
                      src="/icon-box2.svg"
                    />
                    <img
                      className={styles.iconBox3}
                      alt=""
                      src="/icon-box3.svg"
                    />
                    <img
                      className={styles.iconBox3}
                      alt=""
                      src="/icon-box4.svg"
                    />
                    <img
                      className={styles.iconBox3}
                      alt=""
                      src="/icon-box5.svg"
                    />
                    <img
                      className={styles.iconBox3}
                      alt=""
                      src="/icon-box6.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.elementscard}>
              <div className={styles.imagePlaceholder}>
                <img
                  className={styles.pasteImageIcon}
                  alt=""
                  src="/paste-image5@2x.png"
                />
              </div>
              <div className={styles.content}>
                <div className={styles.info}>
                  <div className={styles.title}>
                    <div className={styles.name}>Hanna Dias</div>
                    <div className={styles.jobTitle}>Software Engineer</div>
                  </div>
                  <div className={styles.thereAreMany}>
                    There are many variations of passages of Lorem Ipsum
                    available
                  </div>
                </div>
                <div className={styles.socialIcons}>
                  <div className={styles.icons}>
                    <img
                      className={styles.iconBox}
                      alt=""
                      src="/icon-box.svg"
                    />
                    <img
                      className={styles.iconBox}
                      alt=""
                      src="/icon-box1.svg"
                    />
                    <img
                      className={styles.iconBox}
                      alt=""
                      src="/icon-box2.svg"
                    />
                    <img
                      className={styles.iconBox3}
                      alt=""
                      src="/icon-box3.svg"
                    />
                    <img
                      className={styles.iconBox3}
                      alt=""
                      src="/icon-box4.svg"
                    />
                    <img
                      className={styles.iconBox3}
                      alt=""
                      src="/icon-box5.svg"
                    />
                    <img
                      className={styles.iconBox3}
                      alt=""
                      src="/icon-box6.svg"
                    />
                  </div>
                </div>
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
          data-scroll-to="shareYourTravelsSectionBac"
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

export default CraftersTeam;
