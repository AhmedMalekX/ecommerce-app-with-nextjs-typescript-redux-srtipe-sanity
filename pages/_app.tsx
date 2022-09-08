import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Ecommerce</title>
        <link rel="icon" href="https://rb.gy/vsvv2o" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
