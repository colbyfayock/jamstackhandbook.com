import Head from 'next/head'

import styles from '../styles/Home.module.scss'

import { createTweetAction, openTweet } from '../lib/social';

import Main from '../components/Main';
import Section from '../components/Section';
import Hero from '../components/Hero';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Button from '../components/Button';

export default function Success() {
  const twitterAction = createTweetAction({
    message: [
      '💥 I just pre-ordered Jamstack Handbook from @colbyfayock\n',
      '⚡️ It shows you how to build fast dynamic #webdev apps w/ #javascript and the static web\n',
      '👉 Go grab your copy! Theres a preorder special with a FREE sticker pack\n',
      '#jamstack101 #jamstackhandbook\n',
      'https://jamstackhandbook.com',
    ]
  });

  function handleOnTwitterClick(e) {
    e.preventDefault();
    openTweet({
        message: twitterAction
    })
  }

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
              You should receive message within a few minutes to the email you
              provided during checkout. If you don't see it, please check your
              Spam folder or Promotions tab.
            </p>

            <p>
              Questions or issues? Reach out at hello@colbyfayock.com
            </p>

            <h2>Let people know you just pre-ordered!</h2>

            <Button onClick={handleOnTwitterClick}>Share on Twitter</Button>

          </Container>
        </Section>
      </Main>

      <Footer />

    </div>
  )
}