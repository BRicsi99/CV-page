import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {

  return (
    <Html>
      <Head>
        <link rel="icon" href="/man.ico" />
        <link href="/dist/output.css" rel="stylesheet" />
        <link rel="alternate" href="/en" hrefLang="en" />
        <link rel="alternate" href="/" hrefLang="hu" />
      </Head>
      <body >
        <Main/>
        <NextScript />
      </body>
    </Html>
  );
}
