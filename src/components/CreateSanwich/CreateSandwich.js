import React from 'react'
import Bun from './Bun'
import Cheese from './Cheese'
import Ingredient from './Ingredient'
import Lettuce from './Lettuce'
import Protein from './Protein'
import Sauce from './Sauce'
import Tomato from './Tomato'

export default function CreateSandwich() {
  return (
    <>
      <div className='sandwich'>
        <h1>Let's make a Sandwich</h1>
        <Bun />
        <Tomato />
        <Lettuce />
        <Sauce />
        <Protein />
        <Cheese />
        <Bun />
      </div>
      <Ingredient />
    </>
  )
}
