import React from 'react';

import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerElement}>
        contact
      </div>
      <div className={styles.footerElement}>
        Mentions Légales
      </div>
      <div className={styles.footerElement}>
        Social media
      </div>
    </div>
  )
}