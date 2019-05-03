import React from 'react';
import './Header.scss';

function Header() {
  return (
    <header className="Header">
      <nav className="navbar has-background-primary">
        <div className="navbar-brand">
          <div className="navbar-item">
            <h1 className="title is-2 has-text-white">zoop</h1>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;