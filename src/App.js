import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Home from './views/Home/Home';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Artists from './components/Artists/Artists';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App__main container">
        <Router>
          <Link to="/">Home</Link>

          <Route path="/" exact component={Home} />
        </Router>
      </main>
    </div>
  );
}

export default App;
