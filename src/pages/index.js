import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <>
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
    </>
  );
}
