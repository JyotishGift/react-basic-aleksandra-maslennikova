import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './Main.css';
import SignIn from '../Auth/SignIn';
import SignUp from '../Auth/SignUp';

const Main = () => {
  return (
    <div className="Main">
      <Switch>
        <Route exact path = '/signin' component = {SignIn}/>
        <Route exact path = '/signup' component = {SignUp}/>
      </Switch>
    </div>
  )
}

export default Main;