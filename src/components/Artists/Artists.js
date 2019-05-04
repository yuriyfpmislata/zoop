import React from 'react';
import './Artists.scss';
import Artist from './Artist/Artist';

function Artists({ artists }) {
  return (
    <div className="Artists">
      <h2 className="Artists__title title is-4">Artists</h2>
      <div className="Artists__grid">
        {
          artists.length > 0
            ? artists.map(artist => (
              <Artist key={artist._id} artist={artist} />
            ))
            : 'Fetching artists...'
        }
      </div>
    </div>
  );
}

export default Artists;