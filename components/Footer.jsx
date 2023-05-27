import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <p>
        <Link className='site-logo' to="/">#BRAINSLUGCT  
        </Link>
        <span>
           &#169; 2023 
        </span>
      </p>
      <h5><a href="https://webdevdan.com/">WebDevDan.com</a></h5>
    </footer>
  )
}

export default Footer