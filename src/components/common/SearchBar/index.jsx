import Proptypes from 'prop-types'
import { BsSearch } from 'react-icons/bs'

import styles from './SearchBar.module.css'

const SearchBar = ({ searchValue, onSearchChange }) => {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        value={searchValue}
        onChange={onSearchChange}
      />
      <div className={styles.inputIcon}>
        <BsSearch />
      </div>
    </div>
  )
}

SearchBar.propTypes = {
  searchValue: Proptypes.string,
  onSearchChange: Proptypes.func.isRequired
}

export default SearchBar
