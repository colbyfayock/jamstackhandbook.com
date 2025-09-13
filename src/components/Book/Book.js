import styles from './Book.module.scss';

const Book = ({ children, className, ...rest }) => {

  return (
    <span className={styles.container} href="https://jamstackhandbook.com/" target="_blank" rel="noreferrer noopener">
      <span className={styles.book}>
        <img alt="Jamstack Handbook" src="/images/jamstack-handbook-cover.jpg" />
      </span>
    </span>
  )
}

export default Book;