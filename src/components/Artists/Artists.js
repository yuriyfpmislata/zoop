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
            : null
        }
      </div>
    </div>
  );
}

export default Artists;