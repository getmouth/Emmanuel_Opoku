/* eslint-disable react/self-closing-comp */
import React from 'react';
import svg from './svg';

const Header = () => (

  <div className="header">
    <nav className="navbar navbar-light header-nav">
      <a href="/" className="navbar-brand svg-container">{svg()}</a>
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/">
            DE
          </a>
        </li>
      </ul>
    </nav>
  </div>
);

export default Header;
