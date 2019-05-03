import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Home from './views/Home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App__main">
        <Home />
      </main>
    </div>
  );
}

export default App;
