import styles from './Navbar.module.css'

import logo from '@/assets/images/logo-bemobile.svg'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img className={styles.logo} src={logo} alt="logo" />
    </nav>
  )
}

export default Navbar
