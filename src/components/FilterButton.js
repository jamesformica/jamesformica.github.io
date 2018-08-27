import React from 'react'

import styles from './FilterButton.css'

const accents = [
  ['plum', 'lightpink'],
  ['lightblue', 'lightcyan'],
  ['bisque', 'lightyellow'],
  ['paleturquoise', 'lightskyblue'],
]

const getAccent = (text) => {
  const sum = text.split('').reduce((agg, curr) => agg + curr.charCodeAt(0), 0)
  return accents[sum % accents.length]
}

const getStyles = (text) => {
  const [accent1, accent2] = getAccent(text)

  return {
    background: `repeating-linear-gradient(45deg, ${accent1}, ${accent1} 10px, ${accent2} 10px, ${accent2} 20px)`,
    border: `2px solid ${accent1}`,
  }
}

const FilterButton = ({ text, onClick }) => (
  <button className={styles.button} style={getStyles(text)} onClick={onClick} type="button">
    {text}
  </button>
)

export default FilterButton
