import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import beigeLogo from "./logo_beige.png";

const NavBar = () => (
        <div className="nav-bar">
            <Link to="/"><img src={beigeLogo} className="nav-logo" /></Link>
            <NavLink to='/login' activeClassName="active-link">Login</NavLink>
            <NavLink to='/signup' activeClassName="active-link">Signup</NavLink>
            <NavLink to='/map' activeClassName="active-link">Map</NavLink>
            <NavLink to='/profile' activeClassName="active-link">My Stories</NavLink>
            {/* <NavLink to='/addlog' activeClassName="active-link">Add Log</NavLink> */}
        </div>
);

export default NavBar;
