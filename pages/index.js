import Head from "next/head";
import { useSession, signIn, signOut } from "next-auth/client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import HomeBeforLogin from "../components/HomeBeforLogin";
import Header from "../components/Header";
import AfterLogin from "../components/AfterLogin";
import requests from "../utils/requests";

export default function Home({ results }) {
  const [session, loading] = useSession();
  const Router = useRouter();
  useEffect(() => {
    // Router.push("/app");
  });

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-black"
      style={{
        "background-image":
          "linear-gradient(rgb(19 17 20 / 90%), rgb(0 0 0 / 90%)), url(/hero-bg.jpg)",
      }}
    >
      <Head>
        <title>Netflix Clone</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header className=" w-full px-12 py-8 ">
        <Header />
      </header>

      <main
        className={`${
          !session
            ? " items-center justify-center w-full flex-grow px-2 text-center text-white "
            : " w-full flex-grow px-2 text-center text-white"
        } flex `}
      >
        {!session ? <HomeBeforLogin /> : <AfterLogin requests={results} />}

        <div></div>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}
