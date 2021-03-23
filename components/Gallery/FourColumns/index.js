import React from 'react';

import styles from './gallery.module.css';

export default function Gallery() {
  return (
  <div className={styles.row}>
    <div className={styles.column}>
    <img src='img/paysage.jpg' />
    <img src='img/portrait.jpg' />
    <img src='img/paysage.jpg' />
    </div>

    <div className={styles.column}>
    <img src='img/portrait.jpg' />
    <img src='img/portrait.jpg' />
    </div>

    <div className={styles.column}>
    <img src='img/paysage.jpg' />
    <img src='img/portrait.jpg' />
    <img src='img/paysage.jpg' />

    </div>

    <div className={styles.column}>
    <img src='img/paysage.jpg' />
    <img src='img/portrait.jpg' />
    </div>
  </div>
  )
}