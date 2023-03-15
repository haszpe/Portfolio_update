import React from "react";
import MobileNav from './MobileNav'
import DesktopNav from "./DesktopNav";
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <nav className={styles.navigation}>
    <DesktopNav/>
    <MobileNav/>
    </nav>
  )
};

export default NavBar;
