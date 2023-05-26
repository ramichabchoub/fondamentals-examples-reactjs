import { Fragment } from 'react'

function Table({ data, config, keyFn }) {
  const renderedConfig = config.map((column) => {
    if (column.header)
      return <Fragment key={column.label}>{column.header()}</Fragment>
    return <th key={column.label}>{column.label}</th>
  })

  const renderedData = data.map((rowData) => {
    const renderedCells = config.map((c) => {
      return (
        <td className='p-4 m-2' key={c.label}>
          {c.render(rowData)}
        </td>
      )
    })
    return (
      <tr key={keyFn(rowData)} className='boder-b'>
        {renderedCells}
      </tr>
    )
  })

  return (
    <table className='table-auto border-spacing-2'>
      <thead>
        <tr className='border-b-2'>{renderedConfig}</tr>
      </thead>
      <tbody>{renderedData}</tbody>
    </table>
  )
}

export default Table
