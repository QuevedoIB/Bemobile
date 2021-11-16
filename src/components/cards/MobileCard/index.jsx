import { mobileTypes } from '@/components/types'

import { formatPrice } from '@/utils/formatPrice'

import styles from './MobileCard.module.css'

const MobileCard = ({ id, brand, model, price, imgUrl }) => {
  return (
    <article className={styles.container}>
      <img
        className={styles.mobileImg}
        loading="lazy"
        src={imgUrl}
        alt={model}
      />
      <div>
        <p>{model}</p>
        <p>{brand}</p>
        <p>{formatPrice({ price })}</p>
      </div>
    </article>
  )
}

MobileCard.propTypes = mobileTypes.isRequired

export default MobileCard
