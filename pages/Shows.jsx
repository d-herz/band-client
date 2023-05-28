import React from 'react'

function Schedule() {

  const shows = [
    
    {
      date: 'June 23, 2023',
      venue: '924 Gilman Street',
      location: 'Berkeley, CA',
      openingActs: ['Operation Ivy','Green Day'],
      soldOut: true,
    },
    {
      date: 'June 30, 2023',
      venue: 'The Greek Theater',
      location: 'Los Angeles, CA',
      openingActs: ['Blink 182'],
      soldOut: true,
    },
    {
      date: 'July 7th, 2023',
      venue: 'Madison Square Garden',
      location: 'New York City, NY',
      openingActs: ['Nofx', 'The Offspring'],
      soldOut: true,
    },
    // Add more show objects as needed
  ];

  return (
    <div className="show-page-container">

      <div className="show-page-content">
        <h1>Upcoming Shows</h1>
        <ul>
          {shows.map((show, index) => (
            <li key={index}>
              <strong>{show.date}</strong> - {show.venue}, {show.location}
              {show.openingActs.length > 0 && (
                <div className='opening-acts'>
                  <span>Opening Acts:</span>  {show.openingActs.join(', ')}
                </div>
              )}
              {show.soldOut && <span className='ticket-status'> - Sold Out</span>}
            </li>
          ))}
        </ul>
       

      </div>

      <div className="about-page-content">
        <h2>

        </h2>
      </div>
    </div>
  )
}

export default Schedule