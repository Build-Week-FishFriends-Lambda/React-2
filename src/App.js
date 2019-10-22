import React from 'react';
import logo from './logo.svg';
import './App.scss';
import LoginForm from "./components/LoginForm"
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import HomePage from "./components/HomePage";
import SignupForm from "./components/SignupForm";
import LakesMap from "./components/LakesMap";
import UserProfile from "./components/UserProfile";
import AddLog from "./components/AddLog";
import NavBar from "./components/NavBar";

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
        
      </Switch>
    </div>
  );
}

export default App;
