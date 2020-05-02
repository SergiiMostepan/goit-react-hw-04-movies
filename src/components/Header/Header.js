import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = ({ films }) => (
  <div className={styles.container}>
    <NavLink
      exact
      to="/"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Home
    </NavLink>
    <NavLink
      to="/movies"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Movies
    </NavLink>
  </div>
);

export default Header;
