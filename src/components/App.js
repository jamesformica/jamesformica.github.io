import React, { Fragment } from 'react'

import Container from './Container'
import Header from './Header'
import Heading from './Heading'
import Projects from './Projects'

const App = () => (
  <Fragment>
    <Header />

    <Container>
      <Heading id="projects" text="Portfolio" />
      <Projects />
    </Container>

  </Fragment>
)

export default App
