import "@/styles/globals.css";
import '../styles/Home.module.css';
import React from "react";
import { BrowserRouter } from "react-router-dom";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
