import { useState, useReducer } from 'react'
import { produce } from 'immer'
import Button from '../components/Button'
import Panel from '../components/Panel'

const INCREMENT = 'increment'
const DECREMENT = 'decrement'
const SET_VALUE_TO_ADD = 'set-value-to-add'
const ADD_VALUE_TO_COUNTER = 'add-value-to-counter'

/* const reducer2 = (state, action) => {
  switch (action.type) {
    case ...:
      return { ...state, ...action.payload }
    case ...:
      return { ...state, ...action.payload }
    default:
      return state
  }
} */

// without immer produce
/* const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 }
    case DECREMENT:
      return { ...state, count: state.count - 1 }
    case SET_VALUE_TO_ADD:
      return { ...state, valueToAdd: action.payload }
    case ADD_VALUE_TO_COUNTER:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0,
      }
    default:
      return state
  }
} */

// with immer produce
const reducer = produce((state, action) => {
  switch (action.type) {
    case INCREMENT:
      state.count++
      break
    case DECREMENT:
      state.count--
      break
    case SET_VALUE_TO_ADD:
      state.valueToAdd = action.payload
      break
    case ADD_VALUE_TO_COUNTER:
      state.count += state.valueToAdd
      state.valueToAdd = 0
      break
    default:
      break
  }
})

function CounterPage({ intialCount }) {
  // const [count, setCount] = useState(intialCount)
  // const [valueToAdd, setValueToAdd] = useState(0)
  const [state, dispatch] = useReducer(produce(reducer), {
    count: intialCount,
    valueToAdd: 0,
  })

  // const increment = () => setCount(count + 1)
  // const decrement = () => setCount(count - 1)
  const increment = () => dispatch({ type: INCREMENT })
  const decrement = () => dispatch({ type: DECREMENT })

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0
    // setValueToAdd(value)
    dispatch({ type: SET_VALUE_TO_ADD, payload: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    // setCount(count + valueToAdd)
    dispatch({ type: ADD_VALUE_TO_COUNTER })
    // setValueToAdd(0)
  }

  return (
    <Panel className='m-3'>
      <h1 className='text-lg'>Count is {state.count}</h1>
      <div className='flex flex-row'>
        <Button primary onClick={increment}>
          Increment
        </Button>
        <Button secondary onClick={decrement}>
          Decrement
        </Button>
      </div>

      <form>
        <label htmlFor='add'>Add a lot!</label>
        <input
          value={state.valueToAdd || ''}
          onChange={handleChange}
          type='number'
          className='p-1 m-3 bg-gray-50 border border-gray-300'
          id='add'
        />
        <Button primary onClick={handleSubmit}>
          Add
        </Button>
      </form>
    </Panel>
  )
}

export default CounterPage
