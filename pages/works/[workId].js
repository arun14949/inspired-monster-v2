/* eslint-disable @next/next/no-img-element */
import React, { useCallback, useEffect, useState, useRef } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { getMediumArticles } from "../../api/works";
import Shimmer from "../../components/Shimmer";
import ImageLightbox from "../../components/ImageLightbox";

const WorkDetail = () => {
  const router = useRouter();
  const { workId } = router.query;
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const bodyRef = useRef();

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setIsLoading(true);
        const response = await getMediumArticles();
        if (response) {
          const found = response.data.find((a) => a.slug === workId);
          setArticle(found || null);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    if (workId) fetchArticle();
  }, [workId]);

  const handleImageClick = useCallback((e) => {
    const src = e.target.src;
    if (src) setLightboxSrc(src);
  }, []);

  useEffect(() => {
    if (!bodyRef.current) return;
    const images = bodyRef.current.querySelectorAll("img");
    images.forEach((img) => img.addEventListener("click", handleImageClick));
    return () => {
      images.forEach((img) => img.removeEventListener("click", handleImageClick));
    };
  }, [article, handleImageClick]);

  return (
    <React.Fragment>
      <Head>
        <title>Inspired Monster | {article?.title || "Works"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="work-detail">
        <div className="work-detail__container">
          {isLoading && (
            <div className="work-detail__loading">
              <Shimmer />
            </div>
          )}

          {!isLoading && article && (
            <>
              <h1 className="work-detail__title">{article.title}</h1>

              <div
                ref={bodyRef}
                className="work-detail__body"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              <a
                href={article.link}
                target="_blank"
                rel="noreferrer"
                className="work-detail__medium-link"
              >
                Read on Medium
              </a>
            </>
          )}
        </div>
      </section>
      {lightboxSrc && (
        <ImageLightbox
          src={lightboxSrc}
          onClose={() => setLightboxSrc(null)}
        />
      )}
    </React.Fragment>
  );
};

export default WorkDetail;
