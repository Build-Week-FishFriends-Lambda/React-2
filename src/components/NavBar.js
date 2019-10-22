import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
        <div className="nav-bar">
          <NavLink to='/login' activeClassName="active-link">Login</NavLink>
          <NavLink to='/signup' activeClassName="active-link">Signup</NavLink>
          <NavLink to='/map' activeClassName="active-link">Map</NavLink>
          <NavLink to='/profile' activeClassName="active-link">Profile</NavLink>
          <NavLink to='/addlog' activeClassName="active-link">Add Log</NavLink>
        </div>
);

export default NavBar;
