import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; { new Date().getFullYear() }, <a href="https://twitter.com/colbyfayock">Colby Fayock</a>
      </p>
    </footer>
  )
}

export default Footer;