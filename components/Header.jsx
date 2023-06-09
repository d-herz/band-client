import React from 'react'
import { Link, NavLink } from 'react-router-dom';

function Header() {

  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#535bf2"
  }

  return (
    <header>
      <Link className='site-logo' to="/">#BRAINSLUGCT</Link>
      <nav>
        <NavLink
          to="/"
          style={ ({isActive}) => isActive ? activeStyle : null }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          style={ ({isActive}) => isActive ? activeStyle : null }
        >
          About
        </NavLink>

        <NavLink
          to="/music"
          style={({ isActive }) => isActive ? activeStyle : null}
        >
          Music
        </NavLink>  

        <NavLink
          to="/shows"
          style={ ({isActive}) => isActive ? activeStyle : null }
        >
          Shows
        </NavLink>

        <NavLink
          to="/contact"
          style={({ isActive }) => isActive ? activeStyle : null}
        >
          Contact
        </NavLink>
      </nav>
    </header>
  )
}

export default Header