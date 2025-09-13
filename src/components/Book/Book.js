import Image from 'next/image'
import styles from './Book.module.scss';

const Book = ({ children, className, ...rest }) => {

  return (
    <span className={styles.container} href="https://jamstackhandbook.com/" target="_blank" rel="noreferrer noopener">
      <span className={styles.book}>
        <Image 
          alt="Jamstack Handbook" 
          src="/images/jamstack-handbook-cover.jpg" 
          width={400}
          height={600}
          priority
        />
      </span>
    </span>
  )
}

export default Book;