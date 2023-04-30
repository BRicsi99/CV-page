import React from 'react'
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
      <Html className="h-full w-full backgrd beach">
        <Head>
          <link rel="icon" href="/man.ico" />
          <link href="/dist/output.css" rel="stylesheet" />
          <link rel="alternate" href="/en" hrefLang="en" />
          <link rel="alternate" href="/" hrefLang="hu" />
        </Head>
        <body className="h-full w-full backgrd">
          <Main className="h-full w-full backgrd"/>
          <NextScript className="h-full w-full backgrd"/>
        </body>
      </Html>
  );
}
