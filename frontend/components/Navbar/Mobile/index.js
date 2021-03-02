import React from 'react';

import styles from '../Navbar.module.css';

export default function MobileNavbar({mobMenu, setMobMenu}) {
  return(
    // <div className={`${styles.MobileNavbar} ${mobMenu ? styles.activ : ''}`}>

  <div className={mobMenu ? styles.activ : styles.MobileNavbar}>
        <button onClick={() => setMobMenu(false)} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
        CLOSE
        </button>
        <div class="">
          <a href="#" class="text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</a>
          <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>
          <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>
          <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
        </div>
  </div>
);
}