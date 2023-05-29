import React from 'react'
import BandMemberCard from '../components/BandMemberCard'
import { Link } from 'react-router-dom'

function About() {

  const bandMembers = [
    {
      name: 'Eric',
      role: 'Lead Vocals/Rhythm Guitar',
      bio: 'Eric rules!',
      image: '/images/slug1.webp',
    },
    {
      name: 'Wes',
      role: 'Lead Guitar/Backing Vocals',
      bio: 'Wes rules!',
      image: '/images/slug2.webp',
    },
    {
      name: 'Dan',
      role: 'Bass guitar/Backing Vocals',
      bio: 'Dan rules!',
      image: '/images/slug3.webp',
    },
    {
      name: 'TBD',
      role: 'Drums',
      bio: 'We need a drummer!',
      image: '/images/slug3.webp',
    },

  ]

  return (
    <div className="about-page-container">

      <div className="about-page-content">
        <h1>POP PUNK's NOT DEAD</h1>
        <p>
          Introducing Brain Slug! The mischievous mavericks of Connecticut's pop-punk scene! Hailing from the wild realms of Torrington, Winsted, and everywhere in between, this electrifying quartet is ready to rock your world, and possibly rearrange your brain cells in the process.  Their music hits harder than rush hour traffic on Route 8 and sticks to your eardrums like the finest single mom's secret recipe. 
        </p>
        <p>
          These rebels with guitar straps are known for their irreverent antics both on and off the stage. If you ever catch them backstage, don't be surprised to find them trading guitar picks for pizza slices, or discussing the intricacies of punk philosophy with the local wildlife. Brain Slug's hilarious banter and infectious humor will have you laughing, moshing, and wondering why your face hurts from smiling so much.
        </p>
        <p>
          Led by their charismatic frontperson, whose hair is as wild as a moose on a caffeine bender, Brain Slug fearlessly tackles the absurdities of life with their lyrical prowess. From poking fun at the woes of adulthood to questioning the cosmic significance of pizza toppings, they embrace irreverence as their musical religion. Their songs are rebellious anthems that unite the disenchanted youth and anyone else who appreciates a good riff and a hearty laugh.
        </p>
        <p>
          So, join Brain Slug's raucous revolution, because life's too short to take seriously. Jump, scream, and let loose with the band that will leave you buzzing like a bee on a sugar high. Get ready for a whirlwind of pop-punk chaos, where Torrington and Winsted become the backdrop for unforgettable musical adventures. Embrace the mayhem, or risk missing out on a wild ride that will make you question everything, including your choice of late-night pizza joint.
        </p>

      </div>

      <div className='about-member-container'>
        <h3>MEMBERS</h3>
        <div className="member-card-container">
          {bandMembers.map((member, index) => (
            <BandMemberCard
              key={index}
              name={member.name}
              role={member.role}
              bio={member.bio}
              image={member.image}
            />
          ))}
        </div>

      </div>
      <div className="about-page-content">
        <h2>
          <Link to="/">#BRAINSLUGCT</Link>
        </h2>
      </div>
    </div>
  )
}

export default About