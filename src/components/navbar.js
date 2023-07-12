import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';

const NavBar = () => (
  <div className={styles.navbar}>
    <span className={styles.navbar_title}>Math Magicians</span>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>|</li>
      <li>
        <Link to="/calculator">Calculator</Link>
      </li>
      <li>|</li>
      <li>
        <Link to="/quotes">Quotes</Link>
      </li>
    </ul>
  </div>
);
export default NavBar;
