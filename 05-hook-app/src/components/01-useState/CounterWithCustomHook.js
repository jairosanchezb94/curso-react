import React from 'react'
import './counter.css'
import { useCouter } from './hooks/useCouter'

export const CounterWithCustomHook = () => {

  const {state, increment, decrement, reset} =  useCouter()

  return (
    <>
        <h1>Counter With Custom Hook: {state}</h1>
        <hr />

        <button
            onClick={ () => increment(2)}    
            className="btn btn-primary"> 
        +1
        </button>
        <button
            onClick={reset}    
            className="btn btn-primary"> 
        Reset
        </button>
        <button 
            onClick={ () => decrement(2)} 
            className="btn btn-primary"> 
        -1
        </button>
    </>
  )
}
