import React, { Component, Fragment } from 'react'

import { filterProjects, getFilters } from '../helpers/projectsHelper'
import FilterButton from './FilterButton'
import projects from '../projects.json'
import styles from './Projects.css'

import * as images from '../../images'

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
    console.log(images)
    return (
      <Fragment>
        {filters.map(f => (
          <FilterButton key={f} text={f} />
        ))}

        {filterProjects(projects, activeFilters).map(p => (
          <div>
            <img src={images[p.image]} alt="moo" />
            {p.name}
          </div>
        ))}
      </Fragment>
    )
  }
}

export default Projects
