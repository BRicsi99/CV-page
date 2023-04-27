import "@/styles/globals.css";
import React from "react";
import { PageProvider } from "../context/PageSwitcherContext";
import { PopUpProvider } from "../context/PopUpContext";

export default function App({ Component, pageProps }) {
  return (
    <PageProvider>
      <PopUpProvider>
        <Component {...pageProps} />
      </PopUpProvider>
    </PageProvider>
  );
}
