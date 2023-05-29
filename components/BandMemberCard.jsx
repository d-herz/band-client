import React from 'react'

function BandMemberCard({ name, role, bio, image, socials}) {
  return (
    <div className="band-member-card">
      <img className="band-member-image" src={image} alt={name} />
      <div className="band-member-details">
        <h3 className="band-member-name">{name}</h3>
        <p className="band-member-role">{role}</p>
        <p className="band-member-bio">{bio}</p>
      </div>
    </div>
  );
}

export default BandMemberCard
