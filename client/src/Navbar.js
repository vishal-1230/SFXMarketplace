import React from 'react'
import {Link} from 'react-router-dom'

import styles from './Navbar.module.css'

function Navbar() {
  return (
    <div className={styles.navbar}>

        <span className={styles.navbarHeading}>SFX<span className={styles.navbarHeading2}>Marketplace</span></span>
          <div className={styles.navMenu}>
          <a href='/' className={`${styles.a} ${styles.navLinks}`}><li className={styles.navMenuItem}>Home</li></a>
          <a href='/about' className={`${styles.a} ${styles.navLinks}`}><li className={styles.navMenuItem}>About</li></a>
          <a href='/downloads' className={`${styles.a} ${styles.navLinks}`}><li className={styles.navMenuItem}>Downloads</li></a>
          <a href='/signuplogin' className={`${styles.a} ${styles.navLinks}`}><li className={styles.navMenuItem}><button className={styles.signinBtn}>Sign In</button></li></a>
        </div>
    </div>
  )
}

export default Navbar