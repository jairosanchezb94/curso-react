import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const AboutScreen = () => {

  const { user, setUser } = useContext(UserContext)

  const handleClick = () => {
    setUser({})
  }

  return (
    <div>
        <h1>About Screen</h1>
        <hr />

        <pre className="container">
          <code>
            {JSON.stringify(user, null, 2)}
          </code>
        </pre>

        <button
          className="btn btn-primary"
          onClick={handleClick}
        >
          Set User
        </button>
    </div>
  )
}
