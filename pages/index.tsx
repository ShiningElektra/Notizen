import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Notizen +</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.title}>Notizen</div>
        <img className={styles.logo} src="/logo.png" />
        <div className={styles.register}>
          <div className={styles.register}></div>
          <div className={styles.register}></div>
          <div className={styles.register}></div>
        </div>
        {/* <Button primary label="Primary" />
        <Button primary={false} label="Secondary" /> */}
      </main>
    </div>
  );
}
