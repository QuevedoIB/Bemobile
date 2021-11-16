import { useParams } from 'react-router'
import { useQuery } from 'react-query'

import Description from '@/components/Detail/Description'
import Actions from '@/components/Detail/Actions'

import { parseDetailsResponse } from '@/utils/parseDetailsResponse'
import MobileService from '@/services/MobileService'

import { HOUR_MILLISECONDS } from '@/constants'

import styles from './Detail.module.css'

const Detail = () => {
  const mobileId = useParams().id

  const {
    isLoading,
    error,
    data: mobile
  } = useQuery(
    `fetch-mobile-${mobileId}`,
    async () => {
      const response = await MobileService.getMobileDetail(mobileId)
      return parseDetailsResponse(response)
    },
    {
      staleTime: HOUR_MILLISECONDS
    }
  )
  //handle error

  if (isLoading || error) return null //handle shimmer

  return (
    <section className={styles.container}>
      <img className={styles.mobileImg} loading="lazy" src={mobile.imgUrl} />
      <div className={styles.infoContainer}>
        <Description mobile={mobile} />
        <Actions mobile={mobile} />
      </div>
    </section>
  )
}

export default Detail
