import React from 'react';

import styles from '../Navbar.module.css';

export default function MobileNavbar({mobMenu, setMobMenu}) {
  return(
    // <div className={`${styles.MobileNavbar} ${mobMenu ? styles.activ : ''}`}>

  <div className={mobMenu ? styles.activ : styles.MobileNavbar}>
        <button onClick={() => setMobMenu(false)} type="button" className={styles.closeMobileNav}>
        CLOSE
        </button>
        <div className={styles.MobileNavbarElts}>
          <a href="#">Dashboard</a>
          <a href="#">Team</a>
          <a href="#">Projects</a>
          <a href="#">Calendar</a>
        </div>
  </div>
);
}