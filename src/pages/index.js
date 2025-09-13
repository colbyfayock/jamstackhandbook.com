import { useReducer, useEffect, useState } from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router';
import { FaBook, FaLaptopCode, FaTwitter, FaQuoteRight, FaProductHunt } from 'react-icons/fa';

import styles from '../styles/Home.module.scss'

import Main from '../components/Main';
import Section from '../components/Section';
import Hero from '../components/Hero';
import Container from '../components/Container';
import Book from '../components/Book';
import Footer from '../components/Footer';
import DownloadForm from '../components/DownloadForm';
import Banner from '../components/Banner';

const TITLE = 'Jamstack Handbook';
const TAGLINE = 'Building fast, dynamic apps with Javascript and the static web';
const DESCRIPTION = 'Building fast, dynamic apps with Javascript and the static web';
const URL = 'https://jamstackhandbook.com';
const ogImage = `${URL}/images/jamstack-handbook-social.jpg`;

const FEATURED_TWEETS = [
  {
    id: '1306248642072805378',
    authorName: 'Francois Lanthier Nadeau',
    authorId: 'the_fln',
    authorImage: 'https://ph-avatars.imgix.net/33608/original.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=120&h=120&fit=crop&frame=1&dpr=2',
    content: [
      'this is a comprehensive, useful, and accessible take on the Jamstack. Colby has been writing about Jamstack and building with it for a long while now. and his passion for the movement and technology shows.'
    ],
    contentUrl: 'https://www.producthunt.com/posts/jamstack-handbook#comment-1142984',
    type: 'producthunt'
  },
  {
    id: '1306228611654004737',
    authorName: 'Will Johnson',
    authorId: 'willjohnsonio',
    authorImage: 'https://pbs.twimg.com/profile_images/1625888957396316168/afVE-xdI_400x400.jpg',
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
    authorName: 'Alex Trost',
    authorId: 'trostcodes',
    authorImage: 'https://pbs.twimg.com/profile_images/1558116076717805570/iICPBWXm_400x400.jpg',
    content: [
      'If you want to work with modern static sites, this is one of the most thorough resources on the JAMStack that I’ve seen.',
      '@colbyfayock wrote 50 React Projects, and now he goes into the what, why, and how of sites powered by Next, Gatsby, etc',
    ],
    type: 'twitter'
  },
  {
    id: '1228449356426219521',
    authorName: 'James Q Quick',
    authorId: 'jamesqquick',
    authorImage: 'https://pbs.twimg.com/profile_images/1596308940794609664/ETIx-wHp_400x400.jpg',
    content: [
      'Jamstack is the new hotness, but it\'s hard to find a clear definition of what exactly it is. Colby does an amazing job of breaking down the key components and benefits of the Jamstack with relevant examples. He also has some hands-on tutorials at the end to get you going. This book is 🔥 and more than worth it!',
    ],
    type: 'quote'
  },
  {
    id: '1306578953998606338',
    authorName: 'Marquet Reid',
    authorId: 'QuetCodesFire',
    authorImage: 'https://pbs.twimg.com/profile_images/1195163512332541953/cmKyK8Hr_400x400.jpg',
    content: [
      'Jamstack Handbook explains WHAT Jamstack is, WHO can benefit from using it, WHERE you can find resources, WHEN you can use it, WHY you should use it, and HOW you can get started with 3 guides to build 3 different projects. #jamstackhandbook',
    ],
    type: 'twitter'
  },
]

export default function Home() {
  const router = useRouter();
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    error: null,
  });

  // Check for success parameters on component mount and route changes
  useEffect(() => {
    const { status, message } = router.query;
    if (status === 'success' && message) {
      setIsSuccess(true);
      // Clear any existing errors
      dispatch(setError(null));
    } else {
      setIsSuccess(false);
    }
  }, [router.query]);

  /**
   * handleOnDownload
   */

  function handleOnDownload() {
    // Clear any previous errors and set loading state
    dispatch(setError(null));
    dispatch(setLoading(true));
  }

  /**
   * handleOnSuccess
   */

  function handleOnSuccess(result) {
    // This is called when the form submission succeeds
    dispatch(setLoading(false));
    console.log('Download successful:', result);
    // Note: The form service redirects back to the page with success params
    // so we don't need to handle redirect here
  }

  /**
   * handleOnError
   */

  function handleOnError(error) {
    // This is called when the form submission fails
    dispatch(setLoading(false));
    dispatch(setError(error.message || 'Download failed. Please try again.'));
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

      <Banner variant={isSuccess ? 'success' : 'default'}>
        {isSuccess ? (
          <p>✉️ <strong>Check your email for a link!</strong> Your download will be available shortly.</p>
        ) : (
          <p>🎉 <strong>Jamstack Handbook is now free!</strong> Download your copy today! 🎉</p>
        )}
      </Banner>

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

                  <DownloadForm 
                    className={styles.heroForm} 
                    onSubmit={handleOnDownload} 
                    onSuccess={handleOnSuccess}
                    onError={handleOnError}
                    disabled={state.loading} 
                  />
                  
                  {state.error && (
                    <div className={styles.errorMessage}>
                      {state.error}
                    </div>
                  )}
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
            <p>
              <a className={styles.producthunt} href="https://www.producthunt.com/posts/jamstack-handbook?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-jamstack-handbook" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=260316&theme=light" alt="Jamstack Handbook - Build fast, dynamic apps with Javascript and the static web | Product Hunt Embed" style={{width: '250px', height: '54px'}} width="250" height="54" /></a>
            </p>
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
                        {authorImage && <img width="200" height="200" src={authorImage} alt={authorName} />}
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
              <img loading="lazy" width="400" height="400" src="/images/colby-fayock-400x400.jpg" alt="Colby Fayock" />
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
            <a href="/images/jamstack-handbook-table-of-contents-1.jpg" target="_blank">
              <img loading="lazy" src="/images/jamstack-handbook-table-of-contents-1.jpg" alt="Table of Contents 1/3" />
            </a>
            <a href="/images/jamstack-handbook-table-of-contents-2.jpg" target="_blank">
              <img loading="lazy" src="/images/jamstack-handbook-table-of-contents-2.jpg" alt="Table of Contents 2/3" />
            </a>
            <a href="/images/jamstack-handbook-table-of-contents-3.jpg" target="_blank">
              <img loading="lazy" src="/images/jamstack-handbook-table-of-contents-3.jpg" alt="Table of Contents 3/3" />
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
            <h2>Download your free copy today!</h2>
            <DownloadForm 
              className={styles.footerForm} 
              onSubmit={handleOnDownload} 
              onSuccess={handleOnSuccess}
              onError={handleOnError}
              disabled={state.loading} 
            />
            
            {state.error && (
              <div className={styles.errorMessage}>
                {state.error}
              </div>
            )}
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