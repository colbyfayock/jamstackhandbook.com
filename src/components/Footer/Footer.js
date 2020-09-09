import styles from './Footer.module.scss';

import { createTweetAction, openTweet } from '../../lib/social';

import Section from '../Section';
import Container from '../Container';
import Button from '../Button';

const Footer = () => {
  const twitterAction = createTweetAction({
    message: [
`🧐 Ever wondered what #jamstack is and what makes it so great?\n
🚀 Check out the Jamstack Handbook from @colbyfayock\n
⚡️ It shows you how to build fast dynamic apps w/ #javascript and the static web\n
👉 Go grab your copy!\n
#jamstack101 #jamstackhandbook\n
https://jamstackhandbook.com/`
    ]
  });

  function handleOnTwitterClick(e) {
    e.preventDefault();
    openTweet({
        message: twitterAction
    })
  }

  return (
    <footer className={styles.footer}>
      <Section id={styles.start} backgroundColor="blue">
        <Container>

          <h2 className={styles.shareheader}>Love this ebook?</h2>

          <p>
            <Button className={styles.sharebutton} onClick={handleOnTwitterClick}>Share on Twitter</Button>
          </p>
        </Container>
      </Section>
      <Section backgroundColor="purple">
        <Container>
          <h3>Want to bulk order or have other questions?</h3>
          <p>
            Contact me at hello@colbyfayock.com
          </p>
          <p className={styles.copyright}>
            &copy; { new Date().getFullYear() }, <a href="https://twitter.com/colbyfayock">Colby Fayock</a>
          </p>
        </Container>
      </Section>
    </footer>
  )
}

export default Footer;