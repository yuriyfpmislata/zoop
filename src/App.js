import React, { useState } from 'react';
import './App.css';

async function getZoopAPIversion() {
  const { version } = await fetch(`${process.env.REACT_APP_ZOOP_API_URL}`).then(res => res.json());
  return version;
}

function App() {

  const [APIversion, setAPIversion] = useState('');

  getZoopAPIversion()
    .then(version => setAPIversion(version));

  return (
    <div className="App">
      <header className="App-header">
        zoop API version: {APIversion}
      </header>
    </div>
  );
}

export default App;
