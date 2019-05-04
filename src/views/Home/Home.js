import React, { useState, useEffect } from 'react';
import './Home.scss';
import * as artistService from '../../services/artists';
import Artists from '../../components/Artists/Artists';

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
      <Artists artists={artists} />
    </section>
  );
}

export default Home;