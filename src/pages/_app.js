import "@/styles/globals.css";
import React from "react";
import { PageProvider } from "../context/PageSwitcherContext";
import { PopUpProvider } from "../context/PopUpContext";
import { NextIntlProvider } from "next-intl";
import { useRouter } from 'next/router';
import en from '../lang/en.json';
import hu from '../lang/hu.json';

const messages = {
  hu,
  en,
};

export default function App({ Component, pageProps }) {

  const locale = useRouter();
  const loc = locale.locale === 'en' ? 'en' : 'hu'; //átmeneti megoldásként

  return (
    <NextIntlProvider locale={loc} messages={messages[loc]}>
      <PageProvider>
        <PopUpProvider>
          <Component {...pageProps} />
        </PopUpProvider>
      </PageProvider>
    </NextIntlProvider>
  );
}
