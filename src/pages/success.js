import Head from 'next/head'

import styles from '../styles/Home.module.scss'

import Main from '../components/Main';
import Section from '../components/Section';
import Hero from '../components/Hero';
import Container from '../components/Container';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Success - Jamstack Handbook</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/images/favicon-512x512.png" />
      </Head>

      <Main>

        <Section>
          <Container>

            <h1>
              Successfully purchased Jamstack Handbook!
            </h1>

            <p>
              Questions or issues? Reach out at hello@colbyfayock.com
            </p>

          </Container>
        </Section>
      </Main>

      <Footer />

    </div>
  )
}