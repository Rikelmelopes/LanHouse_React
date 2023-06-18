import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>Lan House</title>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossorigin="anonymous"
      />
      <link
        rel="icon"
        href="https://images.fineartamerica.com/images/artworkimages/medium/2/berserk-logo-edith-atresia-transparent.png"
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
