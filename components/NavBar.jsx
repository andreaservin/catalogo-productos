import Image from 'next/image'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

import styles from '../styles/Home.module.css'

function NavBar() {
  return (
    <div className={styles.navbar}>
      <Image
        src='/mkit-logo.png'
        alt='Makeitreal Logo'
        width={40}
        height={40}
      />
    </div>
  )
}

export default NavBar
