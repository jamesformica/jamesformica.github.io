import React from 'react'

import styles from './Header.css'

const Header = () => (
  <header className={styles.header}>
    <h1>
      <span className={styles.title}>James Formica
        <br />
        UI Developer
        <br />
        <span className={styles.highlight}>&amp;&nbsp;</span>
        Creative Coder
      </span>
    </h1>
  </header>
)

export default Header
