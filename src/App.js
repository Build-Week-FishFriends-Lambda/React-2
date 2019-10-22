import React, {useState} from 'react';
import logo from './logo.svg';
import './App.scss';

import { Switch, Route } from 'react-router-dom';
import PrivateRoute from "./utils/PrivateRoute";

import axios from 'axios';
import HomePage from "./components/HomePage";
import SignupForm from "./components/SignupForm";
import LakesMap from "./components/LakesMap";
import UserProfile from "./components/UserProfile";
import AddLog from "./components/AddLog";
import NavBar from "./components/NavBar";
import Copyright from "./components/Copyright";
import LoginForm from "./components/LoginForm";

function App() {

  
  

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/' render={props => <HomePage {...props} />} />
        
        <Route path='/login' render={props => <LoginForm />} />
        <Route path='/signup' render={props => <SignupForm {...props} />} />
        {//Map should be a private route
        }
        <Route path='/map' render={props => <LakesMap {...props} />} />
        {//UserProfile should be private route
        }
        <PrivateRoute path='/profile' component={UserProfile} />
        {//AddLog should be private route
        }
        <PrivateRoute path='/addlog' component={AddLog} />
        
      </Switch>
      <Copyright></Copyright>
    </div>
  );
}

export default App;
