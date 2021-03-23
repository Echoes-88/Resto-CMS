import React from 'react';

import styles from './Features.module.css';

export default function Features({image}) {
  return(
    <div className={styles.featureContainer}>
      <h2>Enjoy Sobaya at Home !</h2>
      <h3>- Shipping available -</h3>
      <div className={styles.productsContainer}>

        <div className={styles.product}>
          <img src={image}/>
          <p className={styles.productName}>Sobaya Premium Soup base</p>
          <p className={styles.productPrice}>10€50</p>
          <p className='greenColor italic strong'>Order</p>

          <div className={styles.productPromo}>On sale</div>
        </div>

        <div className={styles.product}>
          <img src={image}/>
          <p className={styles.productName}>Premium soba set</p>
          <p className={styles.productPrice}>22€50</p>
          <p className='greenColor italic strong'>Order</p>

          <div className={styles.productPromo}>On sale</div>
        </div>

        <div className={styles.product}>

            <img src={image}/>
            <p className={styles.productName}>Dry soba</p>
            <p className={styles.productPrice}>4€00</p>
            <p className='redColor italic'>Out of stock</p>

            <div className={styles.productPromo}>On sale</div>
        </div>


      </div>
    </div>
  )
}