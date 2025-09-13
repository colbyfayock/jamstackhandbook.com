import styles from './Main.module.scss';

const Main = ({ children }) => {
  return (
    <div id="main" className={styles.main}>
      { children }
    </div>
  )
}

export default Main;