import uniq from 'lodash/uniq'

export const filterProjects = (projects, filters) => {
  if (filters.length === 0) {
    return projects
  }

  return filters.reduce((agg, current) => {
    agg.push(projects.filter(p => p.tags.includes(current)))
    return agg
  }, [])
}

export const getFilters = (projects) => {
  const allFilters = projects.reduce((agg, current) => {
    agg.push(...current.tags)
    return agg
  }, [])

  return uniq(allFilters)
}
