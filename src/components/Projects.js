import React, { Component } from 'react'

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

    this.toggleFilter = this.toggleFilter.bind(this)
  }

  toggleFilter(text) {
    const { activeFilters } = this.state

    if (activeFilters.includes(text)) {
      this.setState({ activeFilters: activeFilters.filter(f => f !== text) })
    } else {
      this.setState({ activeFilters: [...activeFilters, ...[text]] })
    }
  }

  render() {
    const { filters, activeFilters } = this.state
    const filteredProjects = filterProjects(projects, activeFilters)

    return (
      <div className={styles.bg}>
        <Filters>
          {filters.map(f => (
            <FilterButton
              key={f}
              text={f}
              isActive={activeFilters.includes(f)}
              onClick={this.toggleFilter}
            />
          ))}
        </Filters>

        <Container>
          <div className={styles.projects}>
            {filteredProjects.map(p => <Project project={p} />)}
          </div>
        </Container>
      </div>
    )
  }
}

export default Projects
