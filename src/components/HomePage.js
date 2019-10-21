import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
        <div className="home-nav">
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Signup</Link>
          <Link to='/map'>Map</Link>
          <Link to='/profile'>Profile</Link>
          <Link to='/addlog'>Add Log</Link>
        </div>
);

export default HomePage;
