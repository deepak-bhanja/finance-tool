import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Login from './components/Login/Login';
import Layout from './components/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route path="/login" name="Login" component={Login}></Route>
        <Route path="/" name="Home" component={Layout}></Route>
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
