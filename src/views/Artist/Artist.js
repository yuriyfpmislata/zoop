import React from 'react';

function Artist({ match: route }) {
  const artistId = route.params.artistId;

  return (
    <div>
      {artistId}
    </div>
  )
}

export default Artist;