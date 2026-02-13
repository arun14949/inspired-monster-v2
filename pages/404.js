/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const NotFound = () => {
  const router = useRouter();

  return (
    <React.Fragment>
      <Head>
        <title>Inspired Monster | Page Not Found</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="not-found">
        <div className="not-found__content">
          <img
            src="/images/404-illustration.svg"
            alt="404"
            className="not-found__illustration"
          />
          <h2 className="not-found__title">Oops! Page not found</h2>
          <p className="not-found__subtitle">
            We can&apos;t seem to find the page you are looking for right now.
          </p>
        </div>
        <button
          className="not-found__button"
          onClick={() => router.push("/")}
        >
          Return to Home
        </button>
      </section>
    </React.Fragment>
  );
};

export default NotFound;
