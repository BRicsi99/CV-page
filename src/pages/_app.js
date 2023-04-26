import "@/styles/globals.css";
import React from "react";
import {PageProvider} from "../context/PageSwitcherContext"

export default function App({ Component, pageProps }) {
  return (
    <PageProvider>
      <Component {...pageProps} />
    </PageProvider>
  );
}
