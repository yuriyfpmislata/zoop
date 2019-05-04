import React from 'react';
import './ArtistCard.scss';

function ArtistCard({ artist }) {
  return (
    <div className="ArtistCard card">
      <div className="card-image">
        <figure className="image is-square">
          <img src={artist.image} alt="ArtistCard's avatar" />
        </figure>
      </div>
      <div className="card-content has-text-centered">
        <h3 className="title is-6">{artist.name}</h3>
      </div>
    </div>
  );
}

export default ArtistCard;