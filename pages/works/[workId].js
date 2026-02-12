import React, { useEffect, useMemo, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { getShot, getShots } from "../../api/works";
import SliderControl from "../../components/SliderControl";
import Image from "next/image";
import DribbleIcon from "../../assets/images/dribble_cta.svg";
import Button from "../../components/Button";
import classNames from "classnames";
import BottomSliderControl from "../../components/BottomSliderControl";
import Shimmer from "../../components/Shimmer";

const WorkLanding = () => {
  const { query, push, back, replace } = useRouter();

  const [dribbleWorks, setDribbleWorks] = useState([]);
  const [activeWorkIndex, setActiveWorkIndex] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const [isActive, setActive] = useState(false);

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        setIsLoading(true);
        const response = await getShots();
        if (response) {
          setDribbleWorks(response.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchWorks();
  }, []);

  useEffect(() => {
    if (dribbleWorks.length <= 0) return;
    if (!query) return;
    setActiveWorkIndex(
      dribbleWorks.findIndex((work) => work.id === parseInt(query.workId))
    );
  }, [query, dribbleWorks]);

  const onMore = () => {
    replace("/works/");
  };

  const handleNext = () => {
    const nextWork =
      dribbleWorks[Math.min(activeWorkIndex + 1, dribbleWorks.length - 1)];
    if (nextWork) push(`/works/${nextWork.id}`);
  };
  const handlePrev = () => {
    const prevWork = dribbleWorks[Math.max(activeWorkIndex - 1, 0)];
    if (prevWork) push(`/works/${prevWork.id}`);
  };

  return (
    <React.Fragment>
      <Head>
        <title>Inspired Monster | About me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="work-landing">
        <div className="row h-100">
          <div className="col-sm-8">
            <div className="slider-container">
              <div className="image-container">
                {isLoading ? (
                  <Shimmer />
                ) : (
                  dribbleWorks[activeWorkIndex]?.images && (
                    <Image
                      className="image"
                      src={dribbleWorks[activeWorkIndex].images.two_x}
                      alt={dribbleWorks[activeWorkIndex]?.title}
                      width="100%"
                      height="100%"
                      layout="responsive"
                    />
                  )
                )}
              </div>

              {/* <div className="slider-switcher">
                <div
                  className={classNames(
                    "switcher-element",
                    isActive && "active"
                  )}
                  onClick={() => setActive((prev) => !prev)}
                >
                  {dribbleWorks[activeWorkIndex]?.images && (
                    <div className="thumbnail">
                      <Image
                        className="image"
                        src={dribbleWorks[activeWorkIndex].images.normal}
                        alt={dribbleWorks[activeWorkIndex]?.title}
                        width="100%"
                        height="100%"
                        layout="responsive"
                      />
                    </div>
                  )}
                </div>
              </div> */}
            </div>
          </div>
          <div className="col-sm-4">
            <div className="contents">
              {!isLoading && (
                <SliderControl
                  onMoreClick={onMore}
                  onNext={handleNext}
                  onPrev={handlePrev}
                  disableNext={activeWorkIndex === dribbleWorks.length - 1}
                  disablePrev={activeWorkIndex === 0}
                />
              )}
              <h3>{dribbleWorks[activeWorkIndex]?.title}</h3>
              {dribbleWorks[activeWorkIndex]?.description && (
                <div
                  className="description"
                  dangerouslySetInnerHTML={{
                    __html: dribbleWorks[activeWorkIndex]?.description,
                  }}
                />
              )}
              <div className="mt-4 mt-sm-3">
                <a
                  href={dribbleWorks[activeWorkIndex]?.html_url || "#view"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button icon={DribbleIcon} variant="dribble" fullwidth>
                    View in Dribbble
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <BottomSliderControl
          onMoreClick={onMore}
          onNext={handleNext}
          onPrev={handlePrev}
          disableNext={activeWorkIndex === dribbleWorks.length - 1}
          disablePrev={activeWorkIndex === 0}
        />
      </section>
    </React.Fragment>
  );
};

export default WorkLanding;
