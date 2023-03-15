import React from 'react'
import styles from './DesktopNav.module.css'
import logoimage from '../../assets/logo.png'

const DesktopNav = () => {
  return (
    <nav className={styles.desktop}>
    <div className={styles.logo}>
      <img src={logoimage} alt="" />
    </div>
    <div className={styles.navigation}>
      <a href="">Home</a>
      <a href="">Portfolio</a>
      <a href="">Contact</a>
      <a href="">CV</a>
    </div>
  </nav>
  )
}

export default DesktopNav