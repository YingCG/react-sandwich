import React, { useState } from 'react'

function Counter() {

  const [count, setCount] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setCount(parseInt(count))
  }
  
  

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div>{count}</div>
      <input type="number" value={count} onChange={(e) => setCount(e.target.value)} />
      <button onClick={ () => {setCount(count + 1)} }> + </button>
      <button onClick={ () => {setCount(count + 1)} }> - </button>
    </form>
    </>
  )
}

export default Counter