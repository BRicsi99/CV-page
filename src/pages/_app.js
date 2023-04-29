import "@/styles/globals.css";
import React from "react";
import { PageProvider } from "../context/PageSwitcherContext";
import { PopUpProvider } from "../context/PopUpContext";
import { ThemeProvider } from "../context/DarkModeContext";
import { NextIntlProvider } from "next-intl";
import { useRouter } from "next/router";
import en from "../lang/en.json";
import hu from "../lang/hu.json";

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
          <ThemeProvider>
            <Component {...pageProps} />
          </ThemeProvider>
        </PopUpProvider>
      </PageProvider>
    </NextIntlProvider>
  );
}
