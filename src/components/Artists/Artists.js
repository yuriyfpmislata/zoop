import React from 'react';
import './Artists.scss';
import ArtistCard from './ArtistCard/ArtistCard';

function Artists({ artists }) {
  return (
    <div className="Artists">
      <div className="Artists__grid">
        {
          artists.length > 0
            ? artists.map(artist => (
              <ArtistCard key={artist._id} artist={artist} />
            ))
            : <progress className="progress is-small is-primary" max="100"></progress>
        }
      </div>
    </div>
  );
}

export default Artists;