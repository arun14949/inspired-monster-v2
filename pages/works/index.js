/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import Scrollbar from "smooth-scrollbar";
import { getMediumArticles } from "../../api/works";
import Shimmer from "../../components/Shimmer";

const Works = () => {
  const router = useRouter();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const workRef = useRef();

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        setIsLoading(true);
        const response = await getMediumArticles();
        if (response) setArticles(response.data);
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

  const handleArticleClick = (slug) => {
    router.push(`/works/${slug}`);
  };

  return (
    <React.Fragment>
      <Head>
        <title>Inspired Monster | Works</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="works" ref={workRef}>
        <div className="works-list">
          {!isLoading &&
            articles?.map((article, index) => (
              <React.Fragment key={article.slug}>
                <div
                  className="work-item"
                  onClick={() => handleArticleClick(article.slug)}
                >
                  <div className="work-item__thumbnail">
                    {article.thumbnail ? (
                      <img src={article.thumbnail} alt={article.title} />
                    ) : (
                      <div className="work-item__placeholder">
                        <span>{article.title}</span>
                      </div>
                    )}
                  </div>
                  <div className="work-item__info">
                    <h3 className="work-item__title">{article.title}</h3>
                    <p className="work-item__meta">
                      {article.readingTime} mins read
                    </p>
                  </div>
                </div>
                {index < articles.length - 1 && (
                  <div className="work-item__divider" />
                )}
              </React.Fragment>
            ))}
          {isLoading &&
            new Array(3).fill("").map((_, index) => (
              <div className="work-item" key={"shimmer" + index}>
                <div className="work-item__thumbnail">
                  <Shimmer />
                </div>
                <div className="work-item__info">
                  <div className="shimmer-text" />
                  <div className="shimmer-text short" />
                </div>
              </div>
            ))}
        </div>
      </section>
    </React.Fragment>
  );
};

export default Works;
