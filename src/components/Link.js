import React from 'react'
import styled, { css } from 'styled-components'

import styles from './Link.css'

const StlyedLink = styled.a`
  ${props => props.primary && css`
    color: blueviolet;
  `}

  ${props => props.secondary && css`
    color: black;
  `}
`

const Link = ({ to, children, ...rest }) => (
  <StlyedLink
    className={styles.link}
    href={to}
    target="_blank"
    rel="noopener noreferrer"
    {...rest}
  >
    {children}
  </StlyedLink>
)

export default Link
