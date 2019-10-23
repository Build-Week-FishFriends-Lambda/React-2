import React from 'react';
import logo from './logo.svg';
import './App.scss';

import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import HomePage from "./components/HomePage";
import SignupForm from "./components/SignupForm";
import LakesMap from "./components/LakesMap";
import UserProfile from "./components/UserProfile";
import AddLog from "./components/AddLog";
import NavBar from "./components/NavBar";
import Copyright from "./components/Copyright";
import LoginForm from "./components/LoginForm";
import Location from "./components/Location";
import LocationCard from "./components/LocationCard"; 

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/' render={props => <HomePage {...props} />} />
        
        <Route path='/login' render={props => <LoginForm {...props} />} />
        <Route path='/signup' render={props => <SignupForm {...props} />} />
        {//Map should be a private route
        }
        <Route path='/map' render={props => <LakesMap {...props} />} />
        {//UserProfile should be private route
        }
        <Route path='/profile' component={UserProfile} />
        {//AddLog should be private route
        }
        <Route path='/addlog' component={AddLog} />
        <Route path='/location' exact component={Location} />
        <Route path="/location/:name" render={props => <LocationCard {...props}/>}/>
        
      </Switch>
      <Copyright></Copyright>
    </div>
  );
}

export default App;
