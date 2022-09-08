import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ecommerce</title>
        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/512/1532/1532495.png"
        />
      </Head>

      {/*  Header Component */}
      <Header />
    </div>
  );
};

export default Home;
