import Head from 'next/head'
import styles from '../styles/Home.module.scss'

import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Jamstack Handbook
        </h1>

        <p className={styles.description}>
          Building fast, dynamic apps with Javascript and the static web
        </p>

        <p className={styles.description}>
          Get updates to your inbox!
        </p>

        <form className={styles.form} action="https://app.convertkit.com/forms/1646524/subscriptions" method="post">
          <label className={styles.sronly} htmlFor="email">Email Address</label>
          <input type="email" name="email_address" placeholder="Email Address" required />
          <button>Sign Up</button>
        </form>

      </main>

      <Footer />

    </div>
  )
}
