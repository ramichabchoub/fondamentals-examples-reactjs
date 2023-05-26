import { useState } from 'react'
import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go'

function useSort(config, data) {
  const [sortOrder, setSortOrder] = useState(null)
  const [sortBy, setSortBy] = useState(null)

  const setSortColumn = (label) => {
    if (sortBy && label !== sortBy) {
      setSortOrder('asc')
      setSortBy(label)
      return
    }

    if (sortOrder === null) {
      setSortOrder('asc')
      setSortBy(label)
    } else if (sortOrder === 'asc') {
      setSortOrder('desc')
      setSortBy(label)
    } else {
      setSortOrder(null)
      setSortBy(null)
    }
  }

  // Only sort data if sortBy && sortOrder is not null
  // Make a copy of 'data' prop
  // find the sortValue fun and it for sort
  let sortedData = data
  if (sortBy && sortOrder) {
    const { sortValue } = config.find((column) => column.label === sortBy)
    sortedData = [...data].sort((a, b) => {
      const aValue = sortValue(a)
      const bValue = sortValue(b)

      const reverseOrder = sortOrder === 'asc' ? 1 : -1

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return aValue.localeCompare(bValue) * reverseOrder
      } else {
        return (aValue - bValue) * reverseOrder
      }
    })
  }

  function getIcons(label, sortBy, sortOrder) {
    if (sortBy === label) {
      return sortOrder === 'asc' ? <GoArrowSmallUp /> : <GoArrowSmallDown />
    }
    return (
      <div>
        <GoArrowSmallDown />
        <GoArrowSmallUp />
      </div>
    )
  }

  return { sortedData, setSortColumn, sortBy, sortOrder, getIcons }
}

export default useSort
