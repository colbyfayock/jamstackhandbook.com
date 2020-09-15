import { useReducer } from 'react';
import Head from 'next/head'
import { FaBook, FaLaptopCode } from 'react-icons/fa';
import { TwitterTweetEmbed } from 'react-twitter-embed';


import styles from '../styles/Home.module.scss'

import Main from '../components/Main';
import Section from '../components/Section';
import Hero from '../components/Hero';
import Container from '../components/Container';
import Book from '../components/Book';
import Footer from '../components/Footer';
import Button from '../components/Button';
import BuyWithStripe from '../components/BuyWithStripe';

import { initCheckout, formatPrice } from '../lib/payments';

const PRODUCT_PRICE = process.env.NEXT_PUBLIC_BASE_PRICE;
const PRODUCT_CURRENCY = process.env.NEXT_PUBLIC_CURRENCY;

import imageOgJamstackHandbook from '../images/jamstack-handbook-social.jpg';
import imageColbyFayock from '../images/colby-fayock-400x400.jpg';
import imageTableOfContents1 from '../images/jamstack-handbook-table-of-contents-1.jpg';
import imageTableOfContents2 from '../images/jamstack-handbook-table-of-contents-2.jpg';
import imageTableOfContents3 from '../images/jamstack-handbook-table-of-contents-3.jpg';

const TITLE = 'Jamstack Handbook';
const TAGLINE = 'Building fast, dynamic apps with Javascript and the static web';
const DESCRIPTION = 'Building fast, dynamic apps with Javascript and the static web';
const URL = 'https://jamstackhandbook.com';
const ogImage = `${URL}${imageOgJamstackHandbook}`;

const TWEETS = [
  '1303782679251427331',
  '1303782679251427331',
  '1303782679251427331',
  '1303782679251427331',
]

export default function Home({ tweets }) {

  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    error: null,
  });

  const cost = formatPrice({
    amount: PRODUCT_PRICE,
    currency: PRODUCT_CURRENCY,
    quantity: 1
  });

  /**
   * handleOnPurchase
   */

  async function handleOnPurchase() {
    dispatch(setLoading(true));
    try {
      await initCheckout({
        lineItems: [
          {
            price: process.env.NEXT_PUBLIC_PRICE_ID,
            quantity: 1
          }
        ]
      });
    } catch(e) {
      dispatch(setLoading(false));
      dispatch(setError(e));
    }
  }

  return (
    <>
      <Head>
        <title>Jamstack Handbook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Head>
        <title>{ TITLE }</title>
        <meta name="description" content={DESCRIPTION} />

        <meta property="og:url" content={URL} />
        <meta property="og:type" content="book" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="2024" />
        <meta property="og:image:height" content="1012" />
        <meta property="og:image:alt" content={`${TITLE} - ${TAGLINE}`} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content={ogImage} />
        <meta property="twitter:site" content="@colbyfayock" />
        <meta property="twitter:creator" content="@colbyfayock" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/images/favicon-512x512.png" />
      </Head>

      <Main>

        <Section className={styles.special} backgroundColor="purple">
          <Container>
            <p>
              <strong>Pre-Order Special:</strong> FREE sticker pack with 2 Jamstack stickers
              and <a href="https://twitter.com/colbyfayock/status/1294363413301338117" target="_blank" rel="noreferrer">Cosmo the Space Jellyfish</a>!
            </p>
            <p className={styles.specialNote}>
              Limited quantities. Shipping may be limited or delayed depending on country restrictions.
            </p>
          </Container>
        </Section>

        <Section backgroundColor="gray-light">
          <Container>
            <Hero>

              <div className={styles.hero}>

                <div className={styles.heroContent}>

                  <h1>Jamstack Handbook</h1>

                  <p className={styles.tagline}>
                    Get started on the Jamstack with this <strong>deep dive</strong> including <strong>3 tutorials</strong>.
                  </p>

                  <p>
                    <strong>Release Date:</strong> Wed September 16th!
                  </p>

                  <BuyWithStripe onClick={handleOnPurchase} disabled={state.loading}>
                    Pre-Order for {cost}
                  </BuyWithStripe>
                </div>

                <div className={styles.heroBook}>
                  <Book />
                </div>

              </div>

            </Hero>
          </Container>
        </Section>

        <Section className={styles.highlights} backgroundColor="blue">
          <Container>
            <ul>
              <li>
                <div>
                  <FaBook />
                </div>
                <div>
                  <h3>100 pages of JAM</h3>
                  <p>
                    All you need to know about the Jamstack
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <FaLaptopCode />
                </div>
                <div>
                  <h3>3 JAM-Packed Tutorials</h3>
                  <p>
                    Learn by doing by building different 3 apps
                  </p>
                </div>
              </li>
            </ul>
          </Container>
        </Section>

        <Section className={styles.tweets}>
          <Container>

          <ul>
            {TWEETS.map(id => {
              return (
                <li key={id}>
                  <TwitterTweetEmbed tweetId={id} />
                </li>
              )
            })}
          </ul>



          </Container>
        </Section>

        <Section className={styles.learn} backgroundColor="blue-dark">
          <Container>

            <h2>What you'll learn...</h2>

            <ul>
              <li>
                🤔 What is the Jamstack?
              </li>

              <li>
                💪 What makes the Jamstack so awesome?
              </li>

              <li>
                😢 What isn't the Jamstack great at?
              </li>

              <li>
                ⚡️ What makes the Jamstack so fast?
              </li>

              <li>
                🛠 How can you build your own Jamstack app?
              </li>
            </ul>

          </Container>
        </Section>

        <Section className={styles.tableOfContents}>
          <Container>
            <h2 className={styles.tableOfContentsHeadline}>
              What to expect in Jamstack Handbook
            </h2>
          </Container>
          <Container className={styles.tableOfContentsContainer}>
            <a href={imageTableOfContents1} target="_blank">
              <img src={imageTableOfContents1} alt="Table of Contents 1/3" />
            </a>
            <a href={imageTableOfContents2} target="_blank">
              <img src={imageTableOfContents2} alt="Table of Contents 2/3" />
            </a>
            <a href={imageTableOfContents3} target="_blank">
              <img src={imageTableOfContents3} alt="Table of Contents 3/3" />
            </a>
          </Container>
          <Container>
            <p className={styles.tableOfContentsNote}>
              Click on an image to open it in a new tab.
            </p>
          </Container>
        </Section>

        <Section className={styles.author} backgroundColor="purple">
          <Container>

            <div>
              <img width="400" height="400" src={imageColbyFayock} alt="Colby Fayock" />
            </div>

            <div>
              <h2>From <a href="https://twitter.com/colbyfayock">Colby Fayock</a></h2>
              <p>
                The author of <a href="http://50reactprojects.com/" target="_blank" rel="noreferrer">50 Projects for React & the Static Web</a>
              </p>
            </div>

          </Container>
        </Section>

        <Section className={styles.order} backgroundColor="gray-light">
          <Container>
            <h2>Pre-Order yours today!</h2>
            <BuyWithStripe onClick={handleOnPurchase} disabled={state.loading}>
              Pre-Order for {cost}
            </BuyWithStripe>
          </Container>
        </Section>

        <Section className={styles.updates}>
          <Container>
            <h2>Not ready to pre-order? Sign up for updates!</h2>
            <form className={styles.form} action="https://app.convertkit.com/forms/1646524/subscriptions" method="post">
              <label className={styles.sronly} htmlFor="email">Email Address</label>
              <input type="email" name="email_address" placeholder="Email Address" required />
              <Button>Sign Up</Button>
            </form>
          </Container>
        </Section>

      </Main>

      <Footer />

    </>
  )
}

function setLoading(isLoading) {
  return {
    type: 'setLoading',
    payload: {
      loading: isLoading
    }
  }
}

function setError(error) {
  return {
    type: 'setError',
    payload: {
      error
    }
  }
}

function reducer(state, action) {
  switch (action.type) {
    case 'setLoading':
      return { ...state, loading: action.payload.loading };
    case 'setError':
      return { ...state, error: action.payload.error };
    default:
      throw new Error();
  }
}