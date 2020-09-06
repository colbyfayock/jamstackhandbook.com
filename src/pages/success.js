import Head from 'next/head'

import styles from '../styles/Home.module.scss'

import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Success</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Jamstack Handbook
        </h1>

        <p className={styles.description}>
          Successfully purchased Jamstack Handbook!
        </p>

        <p>
          Questions or issues? Reach out at hello@colbyfayock.com
        </p>

      </main>

      <Footer />

    </div>
  )
}