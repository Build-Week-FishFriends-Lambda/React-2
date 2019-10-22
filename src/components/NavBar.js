import React, {useState, useEffect} from 'react';
import { Link, NavLink } from 'react-router-dom';
import beigeLogo from "./logo_beige.png";

const NavBar = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("token") ? true : false);
    return (
    
        <div className="nav-bar">
            <Link to="/"><img src={beigeLogo} className="nav-logo" /></Link>
            {!isLoggedIn 
            ? <NavLink to='/login' activeClassName="active-link">Login</NavLink> : null}
            {!isLoggedIn 
            ? <NavLink to='/signup' activeClassName="active-link">Signup</NavLink> : null}
            {isLoggedIn 
            ? <NavLink to='/' onClick={ _ => {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                setIsLoggedIn(false) 
            }}>Logout</NavLink> : null}
            <NavLink to='/map' activeClassName="active-link">Map</NavLink>
            <NavLink to='/profile' onClick={ _ => {
                setIsLoggedIn(localStorage.getItem("token") ? true : false); 
            }}
            
            activeClassName="active-link">My Stories</NavLink>
            
        </div>
)};

export default NavBar;

