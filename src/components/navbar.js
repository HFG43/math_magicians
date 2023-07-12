import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div>
    <span />
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/calculator">Calculator</Link>
      </li>
      <li>
        <Link to="/quotes">Quotes</Link>
      </li>
    </ul>
  </div>
);
export default NavBar;
