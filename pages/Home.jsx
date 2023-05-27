import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home-container'>
      <h1>Brain Slug!</h1>
      <h2>Rocking New England's Punk Scene, One Slug at a Time!</h2>
      
      <span>
        "My favorite band!" - Elliot, age 2
      </span>

      <p>
        Add adventure to your life by joining the #BrainSlug movement. 
      </p>
      <Link to="shows">Show Schedule!</Link>
    </div>
    
  )
}

export default Home