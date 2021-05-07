import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Notizen +</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Link href="/notes">
          <div className={styles.link}>
            <div className={styles.title}>Notizen</div>
            <img className={styles.logo} src="/logo.png" />
          </div>
        </Link>
        <div className={styles.register}>
          <div className={styles.register}></div>
          <div className={styles.register}></div>
          <div className={styles.register}></div>
        </div>
      </main>
    </div>
  );
}
