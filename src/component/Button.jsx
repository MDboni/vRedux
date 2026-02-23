import React from 'react'

export default function Button({children, type, handler}) {
    const style = type === 'increment' ? 'bg-blue-500 text-white px-4 py-2 rounded-md' : 'bg-red-500 text-white px-4 py-2 rounded-md';
  return (
    <button className={style} onClick={handler}>
      {children}
    </button>
  )
}
