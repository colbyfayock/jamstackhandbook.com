import styles from './BuyWithStripe.module.scss';

import Button from '../Button';
import LogoStripe from '../LogoStripe';

const BuyWithStripe = ({ children, prefix = 'Buy with', ...rest }) => {
  return (
    <Button className={styles.button} role="link" {...rest}>
      { prefix } <LogoStripe />
    </Button>
  )
}

export default BuyWithStripe;