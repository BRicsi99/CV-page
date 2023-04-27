import React, { useContext } from "react";
import Head from "next/head";
import { Fragment } from "react";
import { Poppins } from "next/font/google";
import MainComponentBio from "@/components/MainComponentBio";
import MainComponentDetail from "@/components/MainComponentDetail";
import SideBar from "@/components/SideBar";
import PopUp from "@/components/PopUp";
import PopUpContext from "@/context/PopUpContext";

export default function Home() {

  const {status} = useContext(PopUpContext)

  return (
    <Fragment>
      <Head>
        <title>Bárdos Richárd</title>
        <meta name="description" content="Bemutatkozó weboldalam" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main
        className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover"
        style={{
          backgroundImage: `url(https://source.unsplash.com/1L71sPT5XKc)`,
        }}
      >
        <div
          id="profile"
          className="max-w-5xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0"
        >
          <SideBar />
          <MainComponentBio />
          <MainComponentDetail />

          <div className={`${status ? '' : 'hidden'}`}>
            <PopUp/>
          </div>
        </div>
      </main>
    </Fragment>
  );
}
