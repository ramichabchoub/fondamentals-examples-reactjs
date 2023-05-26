import { useState, useEffect } from 'react'

function useCounter(intialCount) {
  const [count, setCount] = useState(intialCount)

  useEffect(() => {
    console.log(count)
  }, [count])

  const increment = () => {
    setCount(count + 1)
  }

  return {
    count,
    setCount,
    increment,
  }
}

export default useCounter
