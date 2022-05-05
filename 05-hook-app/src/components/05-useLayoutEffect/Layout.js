import React, { useLayoutEffect, useRef, useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import { useCouter } from '../hooks/useCouter'
import './layout.css'

export const Layout = () => {

  const {counter, increment} = useCouter(1);

  const {data} = useFetch(`://www.breakingbadapi.com/api/quotes/${counter}`)
  //console.log(loading)
  const {quote} = !!data && data[1]
  //console.log(author, qoute)

  const pTab = useRef()
  const [boxSize, setBoxSize] = useState({})

  useLayoutEffect (() => {
    setBoxSize(pTab.current.getBoundingClientRect())
  }, [quote])
  return (
    <div>
        <h1>Layout</h1>
        <hr />

       
          <blockquote className="blockquote text-right">
            <p 
                className="mb-0"
                ref={pTab}
            >
                {quote}
            </p>
          </blockquote>

          <pre>
              {JSON.stringify(boxSize, null, 3)}
          </pre>
      
        <button 
          className="btn btn-primary"
          onClick={() => increment()}
        >
          Siguiente qoute
        </button>
    </div>
  )
}
