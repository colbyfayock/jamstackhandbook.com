import styles from './Book.module.scss';

const Book = ({ children, className, ...rest }) => {

  return (
    <span className={styles.container} href="https://jamstackhandbook.com/" target="_blank" rel="noreferrer noopener">
      <span className={styles.book}>
        <img alt="Jamstack Handbook" src="https://cdn-std.droplr.net/files/acc_235505/NIbE9h" />
      </span>
    </span>
  )
}

export default Book;