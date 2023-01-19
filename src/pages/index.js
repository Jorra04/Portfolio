import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import styles from "../styles/Home.module.css"

export default function Home() {
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
          <div className="text-center p-10">
            <h2 className=" text-5xl py-2 font-medium">
              Jorra Singh
            </h2>
            <div className={styles.wrapper}>
              <div className={styles.outterContainer}>
                <h3 className="text-2xl">Software Engineer and </h3>
                <div className={styles.words}>
                  <h3 className={styles.scrolingWords}>Lifelong Student.</h3>
                  <h3 className={styles.scrolingWords}>Problem Solver.</h3>
                  <h3 className={styles.scrolingWords}>Guitar Player.</h3>
                  <h3 className={styles.scrolingWords}>Sports Enthusiast.</h3>
                  <h3 className={styles.scrolingWords}>Lifelong Student.</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="h-1/6">
          <Footer/>
        </section>
       
      </main>
    </>
  );
}
