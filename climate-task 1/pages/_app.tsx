import "../styles/globals.css";
import "../styles/home.scss";
import "../styles/slide.scss";
import "../styles/customRadio.scss";
import "../styles/nav.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import Nav from "../components/Nav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Climate App</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,400;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
