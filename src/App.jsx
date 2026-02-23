import React, { useState } from 'react'
import Counter from './component/Counter'
import Stats from './component/Stats'

const initialCouters =[
  {id: 1, value: 10},
  {id: 2, value: 20},
]

export default function App() {
  const [counters, setCounters] = useState(initialCouters);

  const handleIncrement = (id) => {
    setCounters(prev => prev.map(counter => counter.id === id ? {...counter, value: counter.value + 1} : counter));
  }
  const handleDecrement = (id) => {
    setCounters(prev => prev.map(counter => counter.id === id ? {...counter, value: counter.value - 1} : counter));
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
