import Head from "next/head";
import { Fragment } from "react";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/layout/Header";
import MainComponentBio from "@/components/MainComponentBio";
import MainComponentDetail from "@/components/MainComponentDetail";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Bárdos Richárd</title>
        <meta name="description" content="Bemutatkozó weboldalam" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge"></meta>
        <link rel="icon" href="/man.ico" />
        <link href="/dist/output.css" rel="stylesheet" />
      </Head>
      <main>
        <body
          className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover"
          style={{
            backgroundImage: `url(https://source.unsplash.com/1L71sPT5XKc)`,
          }}
        >
          <div
            id="profile"
            className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0"
          >
            <MainComponentBio />
            <MainComponentDetail />
          </div>
        </body>
      </main>
    </Fragment>
  );
}
