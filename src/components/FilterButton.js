import React from 'react'
import styled, { css } from 'styled-components'

import styles from './FilterButton.css'

const accents = [
  ['plum', 'lightpink'],
  ['lightblue', 'lightcyan'],
  ['bisque', 'lightyellow'],
  ['paleturquoise', 'lightskyblue'],
]

const StyledButton = styled.button`
  ${props => props.isActive && css`
    background: repeating-linear-gradient(
      45deg, ${props.accent1}, ${props.accent1} 10px, ${props.accent2} 10px, ${props.accent2} 20px
    );
  `}

  ${props => !props.isActive && css`
    background: repeating-linear-gradient(
      45deg, ghostwhite, ghostwhite 10px, white 10px, white 20px
    );
  `}

  &:hover {
    ${props => !props.isActive && css`
      background: repeating-linear-gradient(
        45deg, ${props.accent1}, ${props.accent1} 10px, ${props.accent2} 10px, ${props.accent2} 20px
      );
    `}
  }
`

const getAccent = (text) => {
  const sum = text.split('').reduce((agg, curr) => agg + curr.charCodeAt(0), 0)
  const [accent1, accent2] = accents[sum % accents.length]

  return { accent1, accent2 }
}

const FilterButton = ({ text, onClick, isActive }) => {
  const active = !onClick ? true : isActive

  return (
    <StyledButton
      type="button"
      className={styles.button}
      onClick={() => onClick(text)}
      isActive={active}
      {...getAccent(text)}
    >
      {text}
    </StyledButton>
  )
}

export default FilterButton
