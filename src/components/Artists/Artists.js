import React from 'react';
import './Artists.scss';

function Artists({ artists }) {
  return (
    <div className="Artists">
      <h2 className="Artists__title title is-4">Artists</h2>
      <ul className="Artists__list">
        {
          artists.length > 0
            ? artists.map(artist => <li key={artist._id}>{artist.name}</li>)
            : 'Fetching artists...'
        }
      </ul>
    </div>
  );
}

export default Artists;