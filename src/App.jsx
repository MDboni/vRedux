import React, { useState } from 'react'
import Counter from './component/Counter'
import Stats from './component/Stats'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './feters/counters/counterSlice'


export default function App() {
  const counters = useSelector(state => state.counter)
  const dispatch = useDispatch()

  const handleIncrement = (id) => {
    dispatch(increment({id}))
  }
  const handleDecrement = (id) => {
    dispatch(decrement({id}))
  }
  return (
    <div className='w-screen h-screen p-10 bg-gray-100 text-slate-700'>
        <h1 className='max-w-md mx-auto text-center text-2xl font-bold'>
          Simpale Counter Application
        </h1>

        <div className='max-w-md mx-auto mt-10 space-y-5'>
          {
            counters.map(counter => (
              <Counter key={counter.id} counter={counter} onIncrement={handleIncrement} onDecrement={handleDecrement}  />
            ))
          }
          <Stats totalCount={counters.reduce((sum, counter) => sum + counter.value, 0)} />
        </div>
    </div>
  )
}
