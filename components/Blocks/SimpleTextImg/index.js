import React from 'react';

import styles from './TextBlockImg.module.css';

export default function Banner() {
  return(
      <div className={styles.textBlockContainer}>
        <h1 className={styles.title}>Title of block</h1>
        <img className={styles.image} src="https://picsum.photos/seed/picsum/200" />
        <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut diam sapien. Phasellus quis diam ultrices tellus suscipit volutpat vitae quis urna. Suspendisse a nibh consequat, fermentum lorem vel, rutrum nibh. Fusce neque arcu, aliquam a venenatis id, elementum nec metus. Phasellus risus lacus, accumsan ut mauris id, bibendum commodo odio. Curabitur facilisis, ex in rutrum porttitor, nunc lectus vestibulum orci, id pretium orci est vel tortor. Integer eleifend eros ut vehicula pretium. Aliquam viverra justo ipsum, condimentum maximus ex pulvinar ut.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut diam sapien. Phasellus quis diam ultrices tellus suscipit volutpat vitae quis urna. Suspendisse a nibh consequat, fermentum lorem vel, rutrum nibh. Fusce neque arcu, aliquam a venenatis id, elementum nec metus. Phasellus risus lacus, accumsan ut mauris id, bibendum commodo odio. Curabitur facilisis, ex in rutrum porttitor, nunc lectus vestibulum orci, id pretium orci est vel tortor. Integer eleifend eros ut vehicula pretium. Aliquam viverra justo ipsum, condimentum maximus ex pulvinar ut.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut diam sapien. Phasellus quis diam ultrices tellus suscipit volutpat vitae quis urna. Suspendisse a nibh consequat, fermentum lorem vel, rutrum nibh. Fusce neque arcu, aliquam a venenatis id, elementum nec metus. Phasellus risus lacus, accumsan ut mauris id, bibendum commodo odio. Curabitur facilisis, ex in rutrum porttitor, nunc lectus vestibulum orci, id pretium orci est vel tortor. Integer eleifend eros ut vehicula pretium. Aliquam viverra justo ipsum, condimentum maximus ex pulvinar ut.
       </p>
      </div>
  )
}