import styles from './Footer.module.scss';

import Container from '../Container';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <h3>What to bulk order or have other questions?</h3>
        <p>
          Contact me at hello@colbyfayock.com
        </p>
        <p className={styles.copyright}>
          &copy; { new Date().getFullYear() }, <a href="https://twitter.com/colbyfayock">Colby Fayock</a>
        </p>
      </Container>
    </footer>
  )
}

export default Footer;