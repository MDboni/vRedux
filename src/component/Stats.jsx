import React from 'react'

export default function Stats({totalCount}) {
  return (
    <div className="border-2 border-gray-300 text-center text-lg font-semibold">
      Total Count: {totalCount}
    </div>
  )
}
