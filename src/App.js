import React, { useState, useEffect } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Home from './views/Home/Home';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Player from './components/Player/Player';
import PlayerContext from './contexts/PlayerContext';
import * as songsService from './services/songs';

function App() {
  const [playingSongId, setPlayingSongId] = useState('');
  const [song, setSong] = useState();

  async function fetchSong(id) {
    setSong(await songsService.findById(id));
  }

  useEffect(() => {
    if (playingSongId) {
      fetchSong(playingSongId);
    }
  }, [playingSongId]);

  return (
    <div className="App">
      <PlayerContext.Provider value={{ song, setPlayingSongId }}>
        <Header />
        <main className="App__main container">
          <Router>
            <Link to="/">Home</Link>

            <Route path="/" exact component={Home} />
          </Router>
        </main>
        <Player />
      </PlayerContext.Provider>
    </div>
  );
}

export default App;
