import { FiShoppingCart } from 'react-icons/fi'
import { useSelector } from 'react-redux'

import styles from './Cart.module.css'

const Cart = () => {
  const amount = useSelector(state => state.cart.cart.amount)
  return (
    <div className={styles.cartContainer}>
      <FiShoppingCart size={'2rem'} />
      {amount > 0 && <div className={styles.amountBullet}>{amount}</div>}
    </div>
  )
}

export default Cart
