import classNames from "classnames";
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import BottomNav from "../components/BottomNav";
import Header from "../components/Header";
import WorkDetailHeader from "../components/WorkDetailHeader";
import { useRouter } from "next/router";

const MainLayout = ({ children }) => {
  const router = useRouter();
  const isWorkDetail = router.pathname === "/works/[workId]";

  const [isNeedMorePadding, setIsNeedMorePadding] = useState(false);
  const initialHeight = useRef();
  const innerWidth = useRef();
  useEffect(() => {
    initialHeight.current = window.innerHeight;
    innerWidth.current = window.innerWidth;
    function onWindowResize() {
      if (innerWidth.current) {
        if (window.innerWidth !== innerWidth.current) return;
      }
      if (initialHeight.current > window.innerHeight)
        setIsNeedMorePadding(true);
      else setIsNeedMorePadding(false);
      initialHeight.current = window.innerHeight;
      innerWidth.current = window.innerWidth;
    }
    window.addEventListener("resize", onWindowResize);
    return () => {
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  return (
    <React.Fragment>
      <Head>
        <meta name="og:title" content="Inspired Monster" />
        <meta
          name="og:description"
          content="Hey there, I am Arun Sajeev, a Product Designer based in
              Kochi. I specialize in creating experiences that are
              intuitive, easy to use and visually pleasing."
        />
        <meta name="twitter:title" content="Inspired Monster" />
        <meta
          name="twitter:description"
          content="Hey there, I am Arun Sajeev, a Product Designer based in
              Kochi. I specialize in creating experiences that are
              intuitive, easy to use and visually pleasing."
        />
        <meta
          name="description"
          content="Hey there, I am Arun Sajeev, a Product Designer based in
              Kochi. I specialize in creating experiences that are
              intuitive, easy to use and visually pleasing."
        />
      </Head>
      {isWorkDetail ? (
        <>
          <div className="work-detail-header-mobile">
            <WorkDetailHeader />
          </div>
          <div className="work-detail-header-desktop">
            <Header />
          </div>
        </>
      ) : (
        <Header />
      )}
      <main className={classNames(isNeedMorePadding && "extra-space")}>
        {children}
      </main>
      <section className="unsupported">
        <h2>I knew this was coming!</h2>
        <p className="warning-text">
          Sorry folks, it looks like we don&apos;t have a design for this
          breakpoint... because my developer friend said people wouldn&apos;t
          use it. I guess he&apos;s never heard of the phrase &apos;better safe
          than sorry.&apos;
        </p>
      </section>
      {!isWorkDetail && <BottomNav />}
    </React.Fragment>
  );
};

export default MainLayout;

// Max width 769
// Show error
// Min 576
