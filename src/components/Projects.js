import React, { Component, Fragment } from 'react'

import { filterProjects, getFilters } from '../helpers/projectsHelper'
import Container from './Container'
import FilterButton from './FilterButton'
import Filters from './Filters'
import Project from './Project'
import projects from '../projects.json'
import styles from './Projects.css'

class Projects extends Component {
  constructor() {
    super()
    this.state = {
      filters: getFilters(projects),
      activeFilters: [],
    }
  }

  render() {
    const { filters, activeFilters } = this.state
    const filteredProjects = filterProjects(projects, activeFilters)

    return (
      <Fragment>
        <Filters>
          {filters.map(f => (
            <FilterButton key={f} text={f} />
          ))}
        </Filters>

        <Container>
          <div className={styles.projects}>
            {filteredProjects.map(p => <Project project={p} />)}
          </div>
        </Container>
      </Fragment>
    )
  }
}

export default Projects
