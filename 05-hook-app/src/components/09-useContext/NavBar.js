import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Use Context</Link>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink exact activeClassName="active" className="nav-link active" aria-current="page" to="/">Home</NavLink>
          <NavLink exact activeClassName="active" className="nav-link" to="/about">Features</NavLink>
          <NavLink exact activeClassName="active" className="nav-link" to="/login">Pricing</NavLink>
        </div>
      </div>
    </div>
  </nav>
  )
}
 