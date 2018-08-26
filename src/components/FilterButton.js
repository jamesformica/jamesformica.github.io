import React from 'react'
import random from 'lodash/random'

import styles from './FilterButton.css'

const accents = [
  ['plum', 'lightpink'],
  ['lightblue', 'lightcyan'],
  ['bisque', 'lightyellow'],
  ['paleturquoise', 'lightskyblue'],
]

const getAccent = () => accents[random(accents.length - 1)]

const getStyles = () => {
  const [accent1, accent2] = getAccent()

  return {
    background: `repeating-linear-gradient(45deg, ${accent1}, ${accent1} 10px, ${accent2} 10px, ${accent2} 20px)`,
    border: `2px solid ${accent1}`,
  }
}

const FilterButton = ({ text, onClick }) => (
  <button className={styles.button} style={getStyles()} onClick={onClick} type="button">
    {text}
  </button>
)

export default FilterButton
