import React from 'react'
import { NavLink } from "react-router-dom";

const Navigation = () => (
    <nav>
        <NavLink 
            to="/"
            exact
            // className=""
            // activeClassName=""
            >Home
        </NavLink>
        <NavLink 
            to="/movies"
            exact
            // className=""
            // activeClassName=""
            >Movies
        </NavLink>
    </nav>
)
export default Navigation;