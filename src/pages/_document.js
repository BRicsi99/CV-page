import React from 'react'
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
      <Html className="h-full sunset">
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
  );
}
