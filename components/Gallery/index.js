import React from 'react';

import styles from './gallery.module.css';


export default function Gallery({images}) {

  const nameClass = images.length > 1 ? 'groupDeTiles' : 'bigTile';

  return (
  <div className={styles.tilesGroup}>
      {images.map(img =>
          <div className={styles.mainTileContainer}>
          <div className={`${styles[nameClass]} ${styles.tileContainer}`}>
            <img className={styles.galleryImg} src={img}/>
          </div>
          <div className={`${styles.superposition} pointer`}>
             <p className={styles.galleryText}>HEEELLOOOO</p>
          </div>
          </div>
      )}
  </div>
  )
}