import React, { useContext } from "react";
import Head from "next/head";
import { Fragment } from "react";
import MainComponentBio from "@/components/MainComponentBio";
import MainComponentDetail from "@/components/MainComponentDetail";
import SideBar from "@/components/SideBar";
import PopUp from "@/components/PopUp";
import PopUpContext from "@/context/PopUpContext";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";

export default function Home() {
  const { status } = useContext(PopUpContext);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const { locales, locale } = useRouter();
  const lang = useTranslations("Index");

  return (
    <Fragment>
      <Head>
        <title>{lang("head_title")}</title>
        <meta name="description" content={lang("head_description")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main
        className={`font-sans antialiased h-screen text-gray-900 leading-normal tracking-wider`}
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
        </div>

        <div className="absolute top-0 left-0 h-12 w-18 p-4 tel:hidden">
          <button
            onClick={() =>
              currentTheme == "dark" ? setTheme("light") : setTheme("dark")
            }
            className="js-change-theme focus:outline-none"
          >
            🌙
          </button>
        </div>
        <div className="absolute top-0 right-0 h-12 w-18 p-4 tel:hidden">
          {[...locales]
            .filter((item) => item !== locale)
            .map((locale) => (
              <Link key={locale} href="/" locale={locale}>
                <img
                  src={
                    locale === "hu"
                      ? "/images/hungary.png"
                      : "/images/united-kingdom.png"
                  }
                  className="h-5"
                />
              </Link>
            ))}
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
