import ButtonPage from './pages/ButtonPage'
import AccordionPage from './pages/AccordionPage'
import DropdownPage from './pages/DropdownPage.jsx'
import ModalPage from './pages/ModalPage'
import TablePage from './pages/TablePage'
import CounterPage from './pages/CounterPage'
import Sidebar from './components/Sidebar'
import Route from './components/Route.jsx'

function App() {
  return (
    <div className='container mx-auto grid grid-cols-6 gap-4 mt-4'>
      <Sidebar />
      <div className='col-span-5'>
        <Route path='/'>
          <DropdownPage />
        </Route>
        <Route path='/button'>
          <ButtonPage />
        </Route>
        <Route path='/accordion'>
          <AccordionPage />
        </Route>
        <Route path='/modal'>
          <ModalPage />
        </Route>
        <Route path='/table'>
          <TablePage />
        </Route>
        <Route path='/counter'>
          <CounterPage intialCount={10} />
        </Route>
      </div>
    </div>
  )
}

export default App
