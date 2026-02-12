/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import Scrollbar from "smooth-scrollbar";
import { getShots } from "../../api/works";
import Shimmer from "../../components/Shimmer";

const Works = () => {
  const router = useRouter();
  const [dribbleWorks, setDribbleWorks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const workRef = useRef();

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        setIsLoading(true);
        const response = await getShots();
        if (response) setDribbleWorks(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchWorks();
  }, []);

  useEffect(() => {
    if (!workRef.current) return;
    const Scroll = Scrollbar.init(workRef.current, {
      enable: true,
      effect: "bounce",
      damping: 0.05,
      maxOverscroll: 150,
      alwaysShowTracks: true,
      glowColor: "#fff",
    });
    Scroll.track.xAxis.element.remove();
    Scroll.track.yAxis.element.remove();
  }, [workRef]);

  const handleOnWorkClick = (id) => router.push(`/works/${id}/`);

  return (
    <React.Fragment>
      <Head>
        <title>Inspired Monster | About me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="works" ref={workRef}>
        <div className="container">
          {!isLoading &&
            dribbleWorks?.map((work, index) => (
              <div
                className="item"
                key={work.id + index}
                onClick={() => handleOnWorkClick(work.id)}
                style={
                  (index + 1) % 10 === 0
                    ? {
                        gridRowStart: Math.floor((index + 1) / 10) * 4 - 1,
                      }
                    : {}
                }
              >
                <Image
                  src={work.images?.two_x}
                  alt={work.title}
                  width="100%"
                  height="100%"
                  layout="fill"
                />
              </div>
            ))}
          {isLoading &&
            new Array(15).fill("")?.map((work, index) => (
              <div
                className="item"
                key={"shimmer" + index}
                onClick={() => handleOnWorkClick(work.id)}
                style={
                  (index + 1) % 10 === 0
                    ? {
                        gridRowStart: Math.floor((index + 1) / 10) * 4 - 1,
                      }
                    : {}
                }
              >
                <Shimmer />
              </div>
            ))}
        </div>
      </section>
    </React.Fragment>
  );
};

export default Works;
