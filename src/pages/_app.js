import { dm_sans, montserrat } from "@/lib/fonts";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <div className={`${dm_sans.variable} ${montserrat.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
