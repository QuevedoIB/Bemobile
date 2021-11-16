import { useRef, useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import Proptypes from 'prop-types'

import MobileCard from '@/components/cards/MobileCard'
import Shimmer from '@/components/common/Shimmer'

import useObserver from '@/hooks/useObserver'

import { mobileTypes } from '@/components/types'

import styles from './MobileList.module.css'

const MobileList = ({ list, amountRendered = 12, isLoading }) => {
  const [itemsDisplayed, setItemsDisplayed] = useState(amountRendered)
  const observerItem = useRef()

  const updateItemsDisplayed = useCallback(() => {
    if (list.length > itemsDisplayed) {
      const increasedAmount =
        itemsDisplayed + amountRendered > list.length
          ? list.length - itemsDisplayed
          : amountRendered
      setItemsDisplayed(currentCount => currentCount + increasedAmount)
    }
  }, [amountRendered, itemsDisplayed, list.length])

  useObserver({
    ref: observerItem,
    keepObserving: true,
    intersectingCallback: updateItemsDisplayed,
    options: { rootMargin: '20px' }
  })

  useEffect(() => {
    setItemsDisplayed(amountRendered)
  }, [amountRendered, list])

  return (
    <ul className={styles.container}>
      {isLoading
        ? new Array(amountRendered).fill().map((_, i) => (
            <li key={i} className={styles.mobileShimmer}>
              <Shimmer />
            </li>
          ))
        : list.slice(0, itemsDisplayed).map(mobile => (
            <Link key={mobile.id} to={`/detail/${mobile.id}`}>
              <MobileCard {...mobile} />
            </Link>
          ))}
      <li ref={observerItem} id="list-observer" />
    </ul>
  )
}

MobileList.propTypes = {
  list: Proptypes.arrayOf(mobileTypes).isRequired,
  amountRendered: Proptypes.number,
  isLoading: Proptypes.bool
}

export default MobileList
