import React, { useContext } from "react";
import Head from "next/head";
import { Fragment } from "react";
import { Poppins } from "next/font/google";
import MainComponentBio from "@/components/MainComponentBio";
import MainComponentDetail from "@/components/MainComponentDetail";
import SideBar from "@/components/SideBar";
import PopUp from "@/components/PopUp";
import PopUpContext from "@/context/PopUpContext";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const { status } = useContext(PopUpContext);

  const { locales } = useRouter();
  const lang = useTranslations("Index");

  return (
    <Fragment>
      <Head>
        <title>{lang("head-title")}</title>
        <meta name="description" content={lang("head-description")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main
        className="font-sans antialiased h-screen text-gray-900 leading-normal tracking-wider bg-cover"
        style={
          {
            //backgroundImage: `url(https://source.unsplash.com/1L71sPT5XKc)`,
            //backgroundColor: 'red',
          }
        }
      >
        <div
          id="profile"
          className="lg:max-w-5xl  tel:justify-center flex lg:items-center h-screen flex-wrap mx-auto lg:my-0"
        >
          <SideBar />
          <MainComponentBio />
          <MainComponentDetail />

          <div className={`${status ? "" : "hidden"}`}>
            <PopUp />
          </div>

          <div>
            {[...locales].sort().map((locale) => (
              <Link
                key={locale}
                href="/"
                locale={locale}
                className="px-10 text-white"
              >
                {locale}
              </Link>
            ))}
          </div>

        </div>
      </main>
    </Fragment>
  );
}

// Language file search
export async function getStaticProps(context) {
  return {
    props: {
      messages: (await import(`../lang/${context.locale}.json`)).default,
    },
  };
}
