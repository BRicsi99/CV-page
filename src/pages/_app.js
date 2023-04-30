import "@/styles/globals.css";
import React from "react";
import { PageProvider } from "../context/PageSwitcherContext";
import { PopUpProvider } from "../context/PopUpContext";
import { NextIntlProvider } from "next-intl";
import { useRouter } from "next/router";
import en from "../lang/en.json";
import hu from "../lang/hu.json";
import { ThemeProvider } from "next-themes"

const messages = {
  hu,
  en,
};

export default function App({ Component, pageProps }) {
  const { locale } = useRouter();

  return (
    <NextIntlProvider locale={locale} messages={messages[locale]}>
      <PageProvider>
        <PopUpProvider>
          <ThemeProvider attribute="class">
            <Component {...pageProps} />
          </ThemeProvider>
        </PopUpProvider>
      </PageProvider>
    </NextIntlProvider>
  );
}
