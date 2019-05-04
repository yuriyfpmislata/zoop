import React, { useState, useEffect } from 'react';
import './Home.scss';
import * as artistService from '../../services/artists';
import Artists from '../../components/Artists/Artists';

function Home() {
  const [artists, setArtists] = useState([]);

  async function fetchArtists() {
    setArtists(await artistService.findRandom(5));
  }

  useEffect(() => {
    fetchArtists();
  }, []);

  return (
    <section className="Home section">
      <h2 className="title is-4">Featured Artists</h2>
      <Artists artists={artists} />
    </section>
  );
}

export default Home;