import React, { useEffect, useState } from 'react'

export const Message = () => {

  const [coords, setCoords] = useState({x: 0, y: 0})
  const {x, y} = coords

  useEffect (() => {

    const mouseMove = (e) => {
      const coords = {x: e.x, y: e.y};
      setCoords(coords)
    }


    window.addEventListener('mousemove', mouseMove)
    //console.log('componente Message')
    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])
  return (
    <div>
        <h1>Message</h1>
        <p>Coordenadas del mouse: x:{x}, y:{y}</p>
    </div>
  )
}
