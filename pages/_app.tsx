import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Head from "next/head";

import "../styles/globals.css";
import { store } from "../redux/store";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Ecommerce</title>
        <link rel="icon" href="https://rb.gy/vsvv2o" />
      </Head>
      <Provider store={store}>
        <Toaster />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
