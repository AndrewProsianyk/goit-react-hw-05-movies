import React from 'react'
import { NavLink } from "react-router-dom";
import styles from './Navigation.module.css'

const Navigation = () => (
    <nav className={styles.navBar}>
        <NavLink 
            to="/"
            exact
            className={styles.link}
            activeClassName={styles.linkActive}
            >Home
        </NavLink>
        <NavLink 
            to="/movies"
            exact
            className={styles.link}
            activeClassName={styles.linkActive}
            >Movies
        </NavLink>
    </nav>
)
export default Navigation;