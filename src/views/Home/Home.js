import React, { useState, useEffect } from 'react';
import './Home.scss';
import * as artistService from '../../services/artists';

function Home() {
  const [artists, setArtists] = useState([]);

  async function fetchArtists() {
    setArtists(await artistService.findAll());
  }

  useEffect(() => {
    fetchArtists();
  }, []);

  return (
    <section className="Home section">
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
    </section>
  );
}

export default Home;