import { useState } from 'react'
import { useAppDispatch, useAppSelector } from './redux/hooks/redux-hooks'
import {
  decrement,
  increment,
  incrementByAmount,
} from './redux/slices/counter-slice'

function App() {
  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  const [incrementAmount, setIncrementAmount] = useState('0')

  return (
    <>
      <h1>count: {count}</h1>
      <input
        type='text'
        onChange={e => setIncrementAmount(e.target.value)}
        value={incrementAmount}
      />
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button
        onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
      >
        追加
      </button>
    </>
  )
}

export default App
