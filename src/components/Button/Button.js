import styles from './Button.module.scss';

const Button = ({ children, className, isLoading, ...rest }) => {

  let buttonClassName = styles.button;

  if (className ) {
    buttonClassName = `${buttonClassName} ${className}`;
  }

  if (isLoading) {
    buttonClassName = `${buttonClassName} ${styles.loading}`;
  }

  return (
    <button {...rest} className={buttonClassName} disabled={isLoading || rest.disabled}>
      <span className={isLoading ? styles.hiddenText : undefined}>
        {children}
      </span>
      {isLoading && (
        <div className={styles.spinner}>
          <div className={styles.spinnerIcon}></div>
        </div>
      )}
    </button>
  )
}

export default Button;