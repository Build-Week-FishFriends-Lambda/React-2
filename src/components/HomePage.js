import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
        <div className="home-nav">
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Signup</Link>
        </div>
);

export default HomePage;
