import React from 'react';

import styles from './Grid.module.css';


export default function Grid() {
  return (
    <div className={styles.gridContainer}>

      <div class={styles.gridElement}>

        <img className={styles.cardImg} src='img/paysage.jpg' />

        <p class="text-indigo-500 font-semibold text-base mt-2">Science</p>

        <h1 class="font-semibold text-gray-900 leading-none text-xl mt-1 capitalize truncate">
          the life of albert einstein
        </h1>

        <div class="max-w-full">
          <p class="text-base font-medium tracking-wide text-gray-600 mt-1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            vel soluta dolore id nesciunt eum nam ipsam, eveniet cupiditate sint
            veritatis harum odit. Iste dignissimos, ad provident nulla
            voluptatum ut.
          </p>
        </div>
        <button className={styles.cardButton}>See more...</button>
      </div>

      {/* break */}

        <div class={styles.gridElement}>

        <img class="h-40 rounded-lg w-full object-cover object-bottom" src="https://picsum.photos/seed/picsum/200" />

        <p class="text-indigo-500 font-semibold text-base mt-2">Science</p>

        <h1 class="font-semibold text-gray-900 leading-none text-xl mt-1 capitalize truncate">
        the life of albert einstein
        </h1>

        <div class="max-w-full">
        <p class="text-base font-medium tracking-wide text-gray-600 mt-1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
        vel soluta dolore id nesciunt eum nam ipsam, eveniet cupiditate sint
        veritatis harum odit. Iste dignissimos, ad provident nulla
        voluptatum ut.
        </p>
        </div>
        </div>

        {/* break */}

        <div class={styles.gridElement}>

        <img class="h-40 rounded-lg w-full object-cover object-bottom" src="https://picsum.photos/seed/picsum/200" />

        <p class="text-indigo-500 font-semibold text-base mt-2">Science</p>

        <h1 class="font-semibold text-gray-900 leading-none text-xl mt-1 capitalize truncate">
        the life of albert einstein
        </h1>

        <div class="max-w-full">
        <p class="text-base font-medium tracking-wide text-gray-600 mt-1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
        vel soluta dolore id nesciunt eum nam ipsam, eveniet cupiditate sint
        veritatis harum odit. Iste dignissimos, ad provident nulla
        voluptatum ut.
        </p>
        </div>
        </div>

    </div>
  )
}