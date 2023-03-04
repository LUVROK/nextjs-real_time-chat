import { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title></title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>{" "}
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
