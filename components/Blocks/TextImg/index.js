import React from 'react';

import styles from './TextImg.module.css';

export default function Banner({text, img}) {
  return(
      <div className={styles.textImgContainer}>
        <img className={styles.image} src={img} />
        <div className={styles.textBlock}>
          {text}
        </div>
      </div>
  )
}