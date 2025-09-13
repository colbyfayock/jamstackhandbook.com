import styles from './Button.module.scss';

const Button = ({ children, className, isLoading, ...rest }) => {

  let buttonClassName = styles.button;

  if (className ) {
    buttonClassName = `${buttonClassName} ${className}`;
  }

  return (
    <button {...rest} className={buttonClassName} disabled={isLoading || rest.disabled}>
      {isLoading ? 'Loading...' : children}
    </button>
  )
}

export default Button;