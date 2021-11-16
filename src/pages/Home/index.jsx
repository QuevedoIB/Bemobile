import { useCallback, useMemo, useState } from 'react'
import { useQuery } from 'react-query'

import SearchBar from '@/components/common/SearchBar'
import MobileList from '@/components/lists/MobileList'

import MobileService from '@/services/MobileService'
import { HOUR_MILLISECONDS } from '@/constants'

import styles from './Home.module.css'

const Home = () => {
  const [filter, setFilter] = useState('')
  const { isLoading, error, data } = useQuery(
    'fetch-mobiles',
    async () => {
      const response = await MobileService.getMobiles()
      return response
    },
    {
      staleTime: HOUR_MILLISECONDS
    }
  )
  //handle error

  const handleFilterChange = useCallback(e => {
    setFilter(e.target.value)
  }, [])

  const filteredMobiles = useMemo(() => {
    return (
      data?.filter(
        mobile => mobile.brand.includes(filter) || mobile.model.includes(filter)
      ) || []
    )
  }, [data, filter])

  return (
    <section>
      <header className={styles.header}>
        <SearchBar onSearchChange={handleFilterChange} searchValue={filter} />
      </header>
      <div>
        <MobileList isLoading={isLoading} list={filteredMobiles} />
      </div>
    </section>
  )
}

export default Home
