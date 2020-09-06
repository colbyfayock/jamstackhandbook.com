import { useReducer } from 'react';
import Head from 'next/head'

import styles from '../styles/Home.module.scss'

import Footer from '../components/Footer';

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
          Learn everything you need to know about the Jamstack including
          3 tutorials to learn by doing for only { cost }
        </p>

        <p>
          Want to bulk order? Reach out at hello@colbyfayock.com
        </p>

        <button role="link" onClick={handleOnPurchase} disabled={state.loading}>
          {state.loading ? `Loading...` : `Buy Now`}
        </button>

        <div>
          {state.error?.message}
        </div>

      </main>

      <Footer />

    </div>
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