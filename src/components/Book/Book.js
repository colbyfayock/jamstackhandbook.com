import styles from './Book.module.scss';

import imageCover from '../../images/jamstack-handbook-cover.jpg';

const Book = ({ children, className, ...rest }) => {

  return (
    <span className={styles.container} href="https://jamstackhandbook.com/" target="_blank" rel="noreferrer noopener">
      <span className={styles.book}>
        <img alt="Jamstack Handbook" src={imageCover} />
      </span>
    </span>
  )
}

export default Book;