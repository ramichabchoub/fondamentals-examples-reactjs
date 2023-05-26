import Link from './Link'

function Sidebar() {
  const links = [
    {
      label: 'Dropdown',
      path: '/',
    },
    {
      label: 'Button',
      path: '/button',
    },
    {
      label: 'Accordion',
      path: '/accordion',
    },
    {
      label: 'Modal',
      path: '/modal',
    },
    {
      label: 'Table',
      path: '/table',
    },
    {
      label: 'Counter',
      path: '/counter',
    },
  ]

  const renderedLinks = links.map((link) => {
    {
      return (
        <Link
          key={link.label}
          path={link.path}
          className='mb-4'
          activeClassName='font-bold border-l-4 border-blue-500 pl-2'
        >
          {link.label}
        </Link>
      )
    }
  })

  return (
    <div className='sticky top-0 overflow-y-scroll flex flex-col items-start'>
      {renderedLinks}
    </div>
  )
}

export default Sidebar
