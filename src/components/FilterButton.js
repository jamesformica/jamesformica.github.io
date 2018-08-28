import React from 'react'
import styled, { css } from 'styled-components'

import styles from './FilterButton.css'

const accents = [
  ['plum', 'lightpink'],
  ['lightblue', 'lightcyan'],
  ['bisque', 'lightyellow'],
  ['paleturquoise', 'lightskyblue'],
]

const getAccent = (text) => {
  const sum = text.split('').reduce((agg, curr) => agg + curr.charCodeAt(0), 0)
  const [accent1, accent2] = accents[sum % accents.length]
  return { accent1, accent2 }
}

const StyledButton = styled.button`
  ${props => css`
    background: repeating-linear-gradient(
      45deg, ${props.accent1}, ${props.accent1} 10px, ${props.accent2} 10px, ${props.accent2} 20px
    )
  `}
`

const FilterButton = ({ text, onClick }) => (
  <StyledButton
    type="button"
    className={styles.button}
    onClick={onClick}
    {...getAccent(text)}
  >
    {text}
  </StyledButton>
)

export default FilterButton
