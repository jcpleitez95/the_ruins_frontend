import React, {useState, UseEffect} from 'react';
import { Route, Switch } from "react-router-dom";
import Header from './Header';
import NavBar from './NavBar';
import Game from './Game';
import UserInfo from './UserInfo';
import Login from './Login';
import SignUp from './SignUp';
import About from './About';

function App() {
  return (
    <div className="root">
        <Route>
            <Header />
            <NavBar/>
        </Route>
        <Switch>
          <Route exact path="/">
            <Game />
            <UserInfo />
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/signup">
            <SignUp/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
