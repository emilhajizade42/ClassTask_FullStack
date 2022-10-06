import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function Navbar() {
  return (
    <nav>
      <h1><Link to="/">CRUD_PRO_MAX</Link></h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
