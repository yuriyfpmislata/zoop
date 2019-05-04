import React from 'react';
import './Artist.scss';

function Artist({ artist }) {
  return (
    <div className="Artist card">
      <div className="card-image">
        <figure className="image is-square">
          <img src={artist.image} alt="Artist's avatar" />
        </figure>
      </div>
      <div className="card-content has-text-centered">
        <h3 className="title is-6">{artist.name}</h3>
      </div>
    </div>
  );
}

export default Artist;