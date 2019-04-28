import React, { useState, useEffect } from 'react';
import './App.css';

async function getSongs() {
  const { songs } = await fetch(`${process.env.REACT_APP_ZOOP_API_URL}/songs`).then(res => res.json());
  return songs;
}


async function getTest() {
  return await fetch(`${process.env.REACT_APP_ZOOP_API_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `
        {
          test
        }
      `
    })
  }).then(res => res.json());
}

function App() {

  const [songs, setSongs] = useState([]);
  const [test, setTest] = useState('');

  useEffect(() => {
    getSongs()
      .then(setSongs);

    getTest()
      .then(({ data }) => setTest(data.test));
  }, []);

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
        <h4>GraphQL test</h4>
        <p>{test}</p>
      </header>
    </div>
  );
}

export default App;
