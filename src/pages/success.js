import Head from 'next/head'
import Image from 'next/image'

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
      '🚀 I just downloaded the free Jamstack Handbook from @colbyfayock\n',
      '⚡️ It shows you how to build fast dynamic #webdev apps with #javascript and the #jamstack\n',
      '👉 Go grab your free copy now!\n',
      '#jamstackhandbook\n',
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
              Check your inbox!
            </h1>

            <p>
              You should receive an email within a few minutes with your download link to the email you
              provided. If you don't see it, please check your
              Spam folder or Promotions tab.
            </p>

            <p>
              Questions or issues? Reach out at hello@colbyfayock.com
            </p>

            <p>
              <a className={styles.producthunt} href="https://www.producthunt.com/posts/jamstack-handbook?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-jamstack-handbook" target="_blank">
                <Image 
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=260316&theme=light" 
                  alt="Jamstack Handbook - Build fast, dynamic apps with Javascript and the static web | Product Hunt Embed" 
                  width={250} 
                  height={54}
                />
              </a>
            </p>

            <h2>Let people know you downloaded it!</h2>

            <Button onClick={handleOnTwitterClick}>Share on Twitter</Button>


          </Container>
        </Section>
      </Main>

      <Footer />

    </div>
  )
}