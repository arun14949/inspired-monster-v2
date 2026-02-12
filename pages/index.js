import Head from "next/head";
import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { LottieAnimation } from "../components/Lottie";
import WhatsappIcon from "../assets/images/whatsapp.svg";
import TwitterIcon from "../assets/images/twitter_lg.svg";
import InstagramIcon from "../assets/images/instagram_lg.svg";
import LinkedinIcon from "../assets/images/linkedin_lg.svg";
import DribbleIcon from "../assets/images/dribble_lg.svg";
import SocialItem from "../components/SocialItem";
import { whatsappMessages } from "../utils/constants";
import SpotifyModal from "../components/SpotifyModal";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState("");

  useEffect(() => {
    setWhatsappLink(
      `https://wa.me/919946701501?text=${encodeURI(
        whatsappMessages[Math.floor(Math.random() * whatsappMessages.length)]
      )}`
    );
  }, []);

  const handleHeadPhoneClick = (e) => {
    const rect = e.target.getBoundingClientRect();

    setOpen(true);
  };

  const handleSpotifyClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Head>
        <title>Inspired Monster</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container center home">
        <div className="row gutter">
          <div className="col-sm">
            <div className="home-image-container">
              <div className="inner">
                <LottieAnimation onMusicClick={handleHeadPhoneClick} />
              </div>
              <div className="social-container">
                <SocialItem
                  path="https://dribbble.com/inspired_monster"
                  icon={DribbleIcon}
                />
                <SocialItem
                  path="https://twitter.com/inspired_monstr"
                  icon={TwitterIcon}
                />
                <SocialItem
                  path="https://www.linkedin.com/in/arunsajeev/"
                  icon={LinkedinIcon}
                />
                <SocialItem
                  path="https://www.instagram.com/inspired_monster/"
                  icon={InstagramIcon}
                />
              </div>
            </div>
          </div>
          <div className="col-sm">
            <h1 className="title-1 secondary slide-up">
              Hey there, I am <b>Arun Sajeev</b>, a Product Designer based in
              Kochi. I specialize in creating experiences that are
              intuitive, easy to use and visually pleasing. Let&apos;s work
              together to create something truly amazing.
            </h1>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="delay mt-40 anchor"
            >
              <Button icon={WhatsappIcon} className="whatsapp-btn">
                Chat Now
              </Button>
            </a>
          </div>
        </div>
      </div>
      <SpotifyModal open={open} onClose={handleSpotifyClose} />
    </React.Fragment>
  );
}
