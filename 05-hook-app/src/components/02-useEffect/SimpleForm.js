import React, { useEffect, useState } from 'react'
import './effects.css'
import { Message } from './Message'

export const SimpleForm = () => {

  const [formState, setformState] = useState({
    name: '',
    email: '',
    password: ''
  })

  const { name, email, password } = formState

  useEffect(() => {
    //console.log('useEffect')
  }, [])

  useEffect(() => {
    //console.log('formState cambió -->', formState)
  }, [formState])

  useEffect(() => {
    //console.log('formState cambió -->', email)
  }, [email])

  const handleInputChange = ({target}) => {
    setformState({
      ...formState,
      [target.name]: target.value
    })
  } 

  return (
    <>
        <h1>Simple Form</h1>
        <hr />

        <div className="form-group">
          <input 
            type="text"
            name="name"
            className="form-control"
            placeholder="Tu nombre"
            autoComplete="off"
            value={name}
            onChange={handleInputChange} 
          />
        </div>
        <div className="form-group">
          <input 
            type="text"
            name="email"
            className="form-control"
            placeholder="Tu email"
            autoComplete="off"
            value={email}
            onChange={handleInputChange} 
          />
        </div>
        <div className="form-group">
          <input 
            type="text"
            name="contraseña"
            className="form-control"
            placeholder="Tu contraseña"
            autoComplete="off"
            value={password}
            onChange={handleInputChange} 
          />
        </div>

        {(name === '123') && <Message />}
    </>
  )
}
