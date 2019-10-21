import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
        <div>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Signup</Link>
          <Link to='/map'>Map</Link>
        </div>
);

export default HomePage;
