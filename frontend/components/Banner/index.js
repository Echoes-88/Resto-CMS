import React from 'react';

import styles from './Banner.module.css';

const image='https://sobaya.square.site/uploads/b/a34939d0-309f-11e9-a7c2-4f00f46436ed/soba01_OTQ4OT.jpg?width=800';

const backgroundImg = {
  height: '200px',
  backgroundImage: 'url('+image+')',
  backgroundPosition: '50% 50%',
  backgroundSize:'cover'
}

export default function Banner() {
  return(
      <div className={styles.fwContainer} style={backgroundImg}>
        <h1 className={styles.title}>HERE IS THE TITLE</h1>
      </div>
  )
}