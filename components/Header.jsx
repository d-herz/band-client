import React from 'react'
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <NavLink
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          to="/shows"
        >
          Shows
        </NavLink>
      </nav>
    </header>
  )
}

export default Header