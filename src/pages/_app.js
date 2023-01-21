import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Jorra Singh Portfolio</title>
        <meta
          name="description"
          content="A protfolio made by Jorra Singh to showcase my skills as a developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen px-10">
        <section className="h-1/6">
          <Navbar/>
        </section>
        <section className="h-4/6 flex flex-col justify-center">
          <Component {...pageProps} />
        </section>
        <section className="h-1/6">
          <Footer/>
        </section>
      </main>
    </>
  );
}
