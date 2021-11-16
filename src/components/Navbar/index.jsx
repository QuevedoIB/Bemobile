import { Link } from 'react-router-dom'

import Cart from '@/components/Navbar/Cart'

import logo from '@/assets/images/logo-bemobile.svg'

import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="logo" />
      </Link>
      <Cart />
    </nav>
  )
}

export default Navbar
