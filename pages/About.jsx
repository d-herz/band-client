import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className="about-page-container">

      <div className="about-page-content">
        <h1>POP PUNK's NOT DEAD</h1>
        <p>
          Introducing Brain Slug, the mischievous mavericks of New England's pop-punk scene! Hailing from the land of clam chowder and revolutionary spirit, this energetic quartet is ready to rock your world, and possibly rearrange your brain cells in the process. With a sound that's punchier than a lobster roll and catchier than a Red Sox victory chant, Brain Slug's music will invade your eardrums like an unstoppable earworm.
        </p>
        <p>
          These rebels with guitar straps are known for their irreverent antics both on and off the stage. If you ever catch them backstage, don't be surprised to find them trading guitar picks for lobsters, or discussing the intricacies of punk philosophy with a side of maple syrup-soaked pancakes. Brain Slug's hilarious banter and infectious humor will have you laughing, moshing, and wondering why your face hurts from smiling so much.
        </p>
        <p>
          Led by their charismatic frontperson, whose hair is as wild as a moose on a caffeine bender, Brain Slug fearlessly tackles the absurdities of life with their lyrical prowess. From poking fun at the woes of adulthood to questioning the cosmic significance of pizza toppings, they embrace irreverence as their musical religion. Their songs are rebellious anthems that unite the disenchanted youth and anyone else who appreciates a good riff and a hearty laugh.
        </p>
        <p>
          So, join Brain Slug's raucous revolution, because life's too short to take seriously. Jump, scream, and let loose with the band that will leave you buzzing like a bee on a sugar high. Prepare for pop-punk pandemonium and a rollicking good time, courtesy of Brain Slug, New England's ultimate punk rock jesters. Embrace the mayhem, or risk missing out on a wild ride that will make you question everything, including your choice of breakfast cereal.
        </p>



      </div>
      <div className="about-page-cta">
        <h2>
          Your destination is waiting. <br />Your van is ready.
        </h2>
        <Link className='link-button' to="/shows">Shows</Link>
      </div>
    </div>
  )
}

export default About