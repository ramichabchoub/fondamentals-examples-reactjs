import Table from './Table'
import useSort from '../hooks/use-sort'

function SortableTable(props) {
  const { config, data } = props
  const { sortedData, setSortColumn, sortBy, sortOrder, getIcons } = useSort(
    config,
    data
  )

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) return column
    return {
      ...column,
      header: () => (
        <th
          onClick={() => setSortColumn(column.label)}
          key={column.label}
          className='cursor-pointer hover:bg-gray-100'
        >
          <div className='flex items-center'>
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    }
  })

  return <Table {...props} config={updatedConfig} data={sortedData} />
}

export default SortableTable
