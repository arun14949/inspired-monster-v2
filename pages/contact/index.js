import classNames from "classnames";
import Head from "next/head";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { sendMail } from "../../api/sendMail";
import Button from "../../components/Button";
import Credits from "../../components/Credits";
import NotificationBanner from "../../components/NotificationBanner";

const EMAIL_PHONE_REGEX = new RegExp(
  /[789][0-9]\d{8,11}|[a-z0-9._%+-]+@[a-z0-9.-]+[\.]{1}[a-z]{2,}$/
);

const Contact = () => {
  const [showCredits, setShowCredits] = useState(false);
  const [name, setName] = useState("");
  const [phoneOrEmail, setPhoneOrEmail] = useState("");
  const [project, setProject] = useState();
  const [projectDescription, setProjectDescription] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [phoneOrEmailError, setPhoneOrEmailError] = useState();

  // Ref
  const contentRef = useRef(null);
  const contactRef = useRef(null);
  const sectionRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    function updateSize() {
      if (!contentRef.current || !footerRef.current) return;
      const contentXPos = contentRef.current.getBoundingClientRect().x;
      footerRef.current.style.width = `${
        contentXPos + contentRef.current.clientWidth
      }px`;
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    setShowNotification(false);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const handleOnNameChange = (e) => {
    setName(e.target.value);
  };

  const handleOnPhoneOrEmailChange = (e) => {
    if (phoneOrEmailError) setPhoneOrEmailError(undefined);
    setPhoneOrEmail(e.target.value);
  };

  const handleRadioButtonClick = (e) => {
    setProject(e.target.value);
  };

  const handleProjectDescriptionChange = (e) => {
    setProjectDescription(e.target.value);
  };
  const handleOnShowCreditsClick = () => {
    setShowCredits(true);
  };

  const onCreditsClose = () => {
    setShowCredits(false);
  };

  const handleSubmitClick = async (event) => {
    try {
      setIsLoading(!isLoading);
      event.target.disabled = true;
      const response = await sendMail(
        name,
        phoneOrEmail,
        project,
        projectDescription
      );
      if (response) {
        setShowNotification(true);
        setName("");
        setPhoneOrEmail("");
        setProject("");
        setProjectDescription("");
        setIsLoading(false);
        event.target.disabled = false;
        //
        contactRef.current?.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        document.body.scrollIntoView({
          behavior: "smooth",
        });
      }
      await setShowNotification(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnBlur = () => {
    if (!phoneOrEmail) {
      setPhoneOrEmailError(undefined);
      return;
    }
    if (!EMAIL_PHONE_REGEX.test(phoneOrEmail)) {
      setPhoneOrEmailError("Error");
    } else {
      setPhoneOrEmailError(undefined);
    }
  };

  return (
    <React.Fragment>
      <Head>
        <title>Inspired Monster | About me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NotificationBanner isOpen={showNotification} isMobile />
      <section
        className={classNames("h-100 contact-us", showNotification && "pt-0")}
        ref={sectionRef}
      >
        <div className="row h-100">
          <div className="col-sm-5">
            <div className="lets-chat">
              <div className="content" ref={contentRef}>
                <h2>Let’s Chat! 💬</h2>
                <p>
                  For quick replies call me (📲
                  <a href="tel:9946701501" target="_blank" rel="noreferrer">
                    9946701501
                  </a>
                  ). For easy connect, find me on{" "}
                  <a
                    href="https://www.instagram.com/inspired_monster/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    instagram&nbsp;
                  </a>
                  or you can also email me at{" "}
                  <a
                    href="mailto:arun14949@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    arun14949@gmail.com
                  </a>
                </p>
              </div>
              <div className="footer" ref={footerRef}>
                <p>
                  © {new Date().getFullYear()} Inspired Monster ·
                  <span onClick={handleOnShowCreditsClick}> Credits</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-7" ref={contactRef}>
            <div className={"contact"}>
              <div className="content">
                <NotificationBanner isOpen={showNotification} />
                <h3>Have a project to talk about?</h3>
                <div className="row gutter-3">
                  <div className="col-sm">
                    <div className="form-group mb-sm-3">
                      <input
                        type="text"
                        id="floating_name"
                        autoComplete="off"
                        placeholder=" "
                        onChange={handleOnNameChange}
                        value={name}
                        required
                      />
                      <label className="floating-label">Your Name *</label>
                    </div>
                  </div>
                  <div className="col-sm">
                    <div className="form-group">
                      <input
                        className={phoneOrEmailError ? "error" : ""}
                        type="text"
                        autoComplete="off"
                        id="floating_name"
                        placeholder=" "
                        onChange={handleOnPhoneOrEmailChange}
                        onBlur={handleOnBlur}
                        value={phoneOrEmail}
                        required
                      />
                      <label className="floating-label">Email or Phone *</label>
                      <span
                        className={classNames(
                          "hint error",
                          phoneOrEmailError && "custom"
                        )}
                      >
                        * Please enter a valid email or phone
                      </span>
                    </div>
                  </div>
                </div>
                <h3 className="mt-5">What kind of project is this?</h3>
                <div className="projects">
                  <div className="project-item">
                    <input
                      id="website"
                      className="radio-button"
                      type="radio"
                      name="projects"
                      value="Website"
                      onChange={handleRadioButtonClick}
                      checked={project === "Website"}
                    />
                    <div className="radio-tile">
                      <label htmlFor="website">Website</label>
                    </div>
                  </div>
                  <div className="project-item">
                    <input
                      type="radio"
                      id="branding"
                      name="projects"
                      value="Branding"
                      className="radio-button"
                      onChange={handleRadioButtonClick}
                      checked={project === "Branding"}
                    />
                    <div className="radio-tile">
                      <label htmlFor="branding">Branding</label>
                    </div>
                  </div>
                  <div className="project-item">
                    <input
                      type="radio"
                      id="app"
                      name="projects"
                      value="App / Software"
                      className="radio-button"
                      onChange={handleRadioButtonClick}
                      checked={project === "App / Software"}
                    />

                    <div className="radio-tile">
                      <label htmlFor="app">App / Software</label>
                    </div>
                  </div>
                  <div className="project-item">
                    <input
                      type="radio"
                      id="graphic-design"
                      name="projects"
                      value="Graphic Design"
                      className="radio-button"
                      onChange={handleRadioButtonClick}
                      checked={project === "Graphic Design"}
                    />

                    <div className="radio-tile">
                      <label htmlFor="graphic-design">Graphic Design</label>
                    </div>
                  </div>
                  <div className="project-item">
                    <input
                      type="radio"
                      id="consulting"
                      name="projects"
                      value="Consulting"
                      className="radio-button"
                      onChange={handleRadioButtonClick}
                      checked={project === "Consulting"}
                    />

                    <div className="radio-tile">
                      <label htmlFor="consulting">Consulting</label>
                    </div>
                  </div>
                  <div className="project-item">
                    <input
                      type="radio"
                      id="other"
                      name="projects"
                      value="Other"
                      className="radio-button"
                      onChange={handleRadioButtonClick}
                      checked={project === "Other"}
                    />

                    <div className="radio-tile">
                      <label htmlFor="other">Other</label>
                    </div>
                  </div>
                </div>
                <div className="form-group mt-4">
                  <textarea
                    required
                    rows={4}
                    onChange={handleProjectDescriptionChange}
                    value={projectDescription}
                    placeholder=" "
                    autoComplete="off"
                  />
                  <label className="floating-label">
                    Describe your project *
                  </label>
                </div>
                <Button
                  className="mt-4 contact-submit"
                  disabled={
                    !name ||
                    !/[789][0-9]\d{8,11}|[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(
                      phoneOrEmail
                    ) ||
                    !project ||
                    !projectDescription
                  }
                  onClick={handleSubmitClick}
                >
                  {isLoading ? (
                    <span className="btn__loader" />
                  ) : (
                    "Submit Project"
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Credits open={showCredits} onClose={onCreditsClose} />
    </React.Fragment>
  );
};

export default Contact;
