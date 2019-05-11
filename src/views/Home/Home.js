import React, { useState, useEffect } from 'react';
import './Home.scss';
import * as artistService from '../../services/artists';
import * as songsService from '../../services/songs';
import Artists from '../../components/Artists/Artists';
import TopCharts from '../../components/TopCharts/TopCharts';

function Home() {
  const [artists, setArtists] = useState([]);
  const [topCharts, setTopCharts] = useState([]);

  async function fetchFeaturedArtists() {
    setArtists(await artistService.findRandom(5));
  }

  async function fetchTopCharts() {
    setTopCharts(await songsService.findTopCharts(10));
  }

  useEffect(() => {
    fetchFeaturedArtists();
    fetchTopCharts();
  }, []);

  return (
    <div className="Home">
      <section className="section">
        <h2 className="title is-4">Featured Artists</h2>
        <Artists artists={artists} />
      </section>

      <section className="section">
        <h2 className="title is-4">Top Charts</h2>
        <TopCharts songs={topCharts} />
      </section>
    </div>
  );
}

export default Home;