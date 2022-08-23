import React from 'react'
import Counter from './Counter'
import ingredientList from './ingredientList'

function Ingredient(props) {
  return (
    <div className='ingredient'>
        <p>You select {props.count} of {props.title}</p>
        <h3>{ingredientList.map((ingredent) => (ingredent.title))}</h3>
        <Counter/>
    </div>
  )
}

export default Ingredient