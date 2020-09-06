import styles from './BuyWithStripe.module.scss';

import Button from '../Button';
import LogoStripe from '../LogoStripe';

const BuyWithStripe = ({ children = 'Order', ...rest }) => {
  return (
    <Button className={styles.button} role="link" {...rest}>
      <LogoStripe /> { children }
    </Button>
  )
}

export default BuyWithStripe;