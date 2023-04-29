import { Html, Head, Main, NextScript } from "next/document";
import { ThemeProvider } from "../context/DarkModeContext";
import React, { useContext } from "react";

export default function Document() {


  return (
    <ThemeProvider>
      <Html className="h-full">
        <Head>
          <link rel="icon" href="/man.ico" />
          <link href="/dist/output.css" rel="stylesheet" />
          <link rel="alternate" href="/en" hrefLang="en" />
          <link rel="alternate" href="/" hrefLang="hu" />
        </Head>
        <body className="h-full">
          <Main className="h-full"/>
          <NextScript />
        </body>
      </Html>
    </ThemeProvider>
  );
}
