import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { useCouter } from '../hooks/useCouter'
import './custom.css'

export const MultipleCustomHook = () => {

  const {counter, increment} = useCouter(1);

  const {loading, data} = useFetch(`://www.breakingbadapi.com/api/quotes/${counter}`)
  //console.log(loading)
  const {author, quote} = !!data && data[1]
  //console.log(author, qoute)
  return (
    <div>
        <h1>Breaking Bad API</h1>
        <hr />

        {loading ? (
          <div className="alert alert-info text-center">
            Loading...
          </div>
        )
        : (
          <blockquote className="blockquote text-right">
            <p className="mb-0">{quote}</p>
            <footer className="blockquote-footer">{author}</footer>
          </blockquote>
      
        )}
        <button 
          className="btn btn-primary"
          onClick={() => increment()}
        >
          Siguiente qoute
        </button>
    </div>
  )
}
