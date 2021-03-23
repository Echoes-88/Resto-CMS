import React from 'react';

import styles from './TextBlock.module.css';

export default function Banner({text}) {
  return(
      <div className={styles.textBlockContainer}>
        <h1></h1>
        <p>{text}</p>
      </div>
  )
}