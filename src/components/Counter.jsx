import React, {useState} from 'react'

const Counter = ({initialValue = 0}) => {
  const [count, setCount] = useState(initialValue);

  let increase = () => {
    setCount(count + 1)
  }

  let decrease = () => {
    if (count > 0) {
    setCount(count - 1);
    }
  }

  let reset = () => {
    setCount(initialValue);
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increase}>Increment</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter