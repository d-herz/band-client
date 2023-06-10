import React from 'react'
import { Link } from 'react-router-dom'
// import bandImage from '/public/images/gig-concert-show-music.jpg' 

function Home() {
  return (
    <>
      <div className='home-container-hero'>

        <h1>Brain Slug!</h1>
          
      </div>

      <div className='home-container-main'>
        <h2>Rocking New England's Punk Scene, One Slug at a Time!</h2>

        <span>
          "My favorite band!" - Elliot, age 2
        </span>

        <p>
          Add adventure to your life by joining the #BrainSlug movement
        </p>
        <Link to="shows">Upcoming Shows</Link>
      </div>
    </>
    
  )
}

export default Home