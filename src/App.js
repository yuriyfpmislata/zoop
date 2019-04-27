import React, { useState } from 'react';
import './App.css';

async function getSongs() {
  const { songs } = await fetch(`${process.env.REACT_APP_ZOOP_API_URL}/songs`).then(res => res.json());
  return songs;
}

function App() {

  const [songs, setSongs] = useState([]);

  getSongs()
    .then(setSongs);

  return (
    <div className="App">
      <header className="App-header">
        <h4>Songs</h4>
        <ul>
          {
            songs.map(song => (
              <li key={song._id}>{song.name} - {song.artist}</li>
            ))
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
