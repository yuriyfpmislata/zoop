import React from 'react';
import './ArtistCard.scss';
import { withRouter } from 'react-router-dom';

function ArtistCard({ artist, history }) {
  return (
    <div className="ArtistCard card" onClick={() => history.push(`/artist/${artist._id}`)}>
      <div className="card-image">
        <figure className="image is-square">
          <img src={artist.image} alt="ArtistCard's avatar" />
        </figure>
      </div>
      <div className="ArtistCard__content card-content has-text-centered">
        <h3 className="title is-6 has-text-primary">{artist.name}</h3>
      </div>
    </div>
  );
}

export default withRouter(ArtistCard);