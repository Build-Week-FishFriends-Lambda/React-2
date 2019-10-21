import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from "./components/LoginForm"
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import HomePage from "./components/HomePage";
import SignupForm from "./components/SignupForm";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={props => <HomePage {...props} />} />
        
        <Route path='/login' render={props => <LoginForm {...props} />} />
        <Route path='/signup' render={props => <SignupForm {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
