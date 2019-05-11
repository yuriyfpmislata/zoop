import React, { useState, useEffect } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Home from './views/Home/Home';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Player from './components/Player/Player';
import PlayerContext from './contexts/PlayerContext';
import * as songsService from './services/songs';
import Artist from './views/Artist/Artist';

function App() {
  const [playingSongId, setPlayingSongId] = useState('');
  const [song, setSong] = useState();

  async function fetchSong(id) {
    setSong(await songsService.findById(id));
  }

  function playSong(id) {
    setPlayingSongId(id);
  }

  useEffect(() => {
    if (playingSongId) {
      fetchSong(playingSongId);
    }
  }, [playingSongId]);

  return (
    <Router>
      <PlayerContext.Provider value={{ song, playSong }}>
        <div className="App">
          <Header />
          <Link to="/">Home</Link>
          <main className="App__main container">
            <Route path="/" exact component={Home} />
            <Route path="/artist/:artistId" exact component={Artist} />
          </main>
          <Player />
        </div>
      </PlayerContext.Provider>
    </Router>
  );
}

export default App;
