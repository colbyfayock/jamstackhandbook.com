import { useReducer } from 'react';
import Head from 'next/head'
import { FaBook, FaLaptopCode, FaTwitter, FaQuoteRight, FaProductHunt } from 'react-icons/fa';

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

const FEATURED_TWEETS = [
  {
    id: '1306248642072805378',
    authorName: 'Francois Lanthier Nadeau - CEO, Snipcart',
    authorId: 'the_fln',
    authorImage: 'https://pbs.twimg.com/profile_images/1211518028300587013/0UlXT7Iu_400x400.jpg',
    content: [
      'this is a comprehensive, useful, and accessible take on the Jamstack. Colby has been writing about Jamstack and building with it for a long while now. and his passion for the movement and technology shows.'
    ],
    contentUrl: 'https://www.producthunt.com/posts/jamstack-handbook#comment-1142984',
    type: 'producthunt'
  },
  {
    id: '1306228611654004737',
    authorName: 'Ruby on Wills 🐺',
    authorId: 'willjohnsonio',
    authorImage: 'https://pbs.twimg.com/profile_images/1284516800504397824/_5C0cPnE_400x400.jpg',
    content: [
      'I read the preview copy of this and it\'s worth way more than $10!',
      'It\'s starts with a clear explanation of the Jamstack to get to more comfortable then go straight into building ',
      'If you want to learn all the buzz check this out ',
      'http://jamstackhandbook.com',
    ],
    type: 'twitter'
  },
  {
    id: '1306265060839432195',
    authorName: '🐴 Alex Trost',
    authorId: 'trostcodes',
    authorImage: 'https://pbs.twimg.com/profile_images/1268565453611438080/kURicp04_400x400.jpg',
    content: [
      'If you want to work with modern static sites, this is one of the most thorough resources on the JAMStack that I’ve seen.',
      '@colbyfayock wrote 50 React Projects, and now he goes into the what, why, and how of sites powered by Next, Gatsby, etc',
    ],
    type: 'twitter'
  },
  {
    id: '1228449356426219521',
    authorName: 'James Quick',
    authorId: 'jamesqquick',
    authorImage: 'https://pbs.twimg.com/profile_images/1228449356426219521/jIN5Ci7H_400x400.jpg',
    content: [
      'Jamstack is the new hotness, but it\'s hard to find a clear definition of what exactly it is. Colby does an amazing job of breaking down the key components and benefits of the Jamstack with relevant examples. He also has some hands-on tutorials at the end to get you going. This book is 🔥 and more than worth it!',
    ],
    type: 'quote'
  },

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
                    Order for {cost}
                  </BuyWithStripe>

                  <p>
                    <a className={styles.producthunt} href="https://www.producthunt.com/posts/jamstack-handbook?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-jamstack-handbook" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=260316&theme=light" alt="Jamstack Handbook - Build fast, dynamic apps with Javascript and the static web | Product Hunt Embed" style={{width: '250px', height: '54px'}} width="250" height="54" /></a>
                  </p>
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

        <Section>
          <Container>
            <h2>What people are saying</h2>
          </Container>
          <Container className={styles.tweets}>
            <ul>
              {FEATURED_TWEETS.map(tweet => {
                const { id, type, authorName, authorId, authorImage, content, contentUrl } = tweet;
                let url = `https://twitter.com/${authorId}`;

                if ( type === 'twitter' ) {
                  url = `${url}/status/${id}`;
                }

                if ( contentUrl ) {
                  url = contentUrl;
                }


                return (
                  <li key={id}>
                    <a className={styles.tweet} href={url}>
                      {type === 'twitter' && (
                        <FaTwitter className={styles.tweetIcon} />
                      )}
                      {type === 'producthunt' && (
                        <FaProductHunt className={styles.producthuntIcon} />
                      )}
                      {type === 'quote' && (
                        <FaQuoteRight className={styles.quoteIcon} />
                      )}
                      <p className={styles.tweetHeader}>
                        <img width="200" height="200" src={authorImage} alt={authorName} />
                        <span className={styles.tweetName}>
                          <strong>{ authorName }</strong>
                          <span>@{ authorId }</span>
                        </span>
                      </p>
                      <div className={styles.tweetContent}>
                        {content.map((content, i) => <p key={i}>{content}</p>)}
                      </div>
                      {type === 'twitter' && (
                        <p className={styles.tweetFooter}>
                          <span>View Tweet</span>
                        </p>
                      )}
                      {type === 'producthunt' && (
                        <p className={styles.tweetFooter}>
                          <span>View Comment</span>
                        </p>
                      )}
                    </a>
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

        <Section className={styles.author} backgroundColor="purple">
          <Container>

            <div>
              <img loading="lazy" width="400" height="400" src={imageColbyFayock} alt="Colby Fayock" />
            </div>

            <div>
              <h2>From <a href="https://twitter.com/colbyfayock">Colby Fayock</a></h2>
              <p>
                The author of <a href="http://50reactprojects.com/" target="_blank" rel="noreferrer">50 Projects for React & the Static Web</a>
              </p>
            </div>

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
              <img loading="lazy" src={imageTableOfContents1} alt="Table of Contents 1/3" />
            </a>
            <a href={imageTableOfContents2} target="_blank">
              <img loading="lazy" src={imageTableOfContents2} alt="Table of Contents 2/3" />
            </a>
            <a href={imageTableOfContents3} target="_blank">
              <img loading="lazy" src={imageTableOfContents3} alt="Table of Contents 3/3" />
            </a>
          </Container>
          <Container>
            <p className={styles.tableOfContentsNote}>
              Click on an image to open it in a new tab.
            </p>
          </Container>
        </Section>

        <Section className={styles.order} backgroundColor="gray-light">
          <Container>
            <h2>Order yours today!</h2>
            <BuyWithStripe onClick={handleOnPurchase} disabled={state.loading}>
              Order for {cost}
            </BuyWithStripe>
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