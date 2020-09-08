import { useReducer } from 'react';
import Head from 'next/head'

import styles from '../styles/Home.module.scss'

import Main from '../components/Main';
import Section from '../components/Section';
import Hero from '../components/Hero';
import Container from '../components/Container';
import Book from '../components/Book';
import Footer from '../components/Footer';
import BuyWithStripe from '../components/BuyWithStripe';

import { initCheckout, formatPrice } from '../lib/payments';

const PRODUCT_PRICE = process.env.NEXT_PUBLIC_BASE_PRICE;
const PRODUCT_CURRENCY = process.env.NEXT_PUBLIC_CURRENCY;

export default function Home() {

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

      <Main>

        <Section backgroundColor="gray-light">
          <Container>
            <Hero>

              <div className={styles.hero}>

                <div className={styles.heroContent}>

                  <h1>Jamstack Handbook</h1>

                  <p className={styles.tagline}>
                    Get started on the Jamstack with this <strong>deep dive</strong> including <strong>3 tutorials</strong>.
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

        <Section backgroundColor="blue-dark">
          <Container>

            <p>
              Building fast, dynamic apps with Javascript and the static web
            </p>

            <p>
              Learn everything you need to know about the Jamstack including
              3 tutorials to learn by doing for only { cost }
            </p>

            <p>
              Want to bulk order? Reach out at hello@colbyfayock.com
            </p>

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