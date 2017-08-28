import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './Main.css';
import SignIn from '../Auth/SignIn';
import SignUp from '../Auth/SignUp';
import User from '../User/User';
import Home from '../Home/Home';

class Main extends Component {
  render() {
    const { user } = this.props;

    return (
      <div className="Main">
        <Switch>
          <Route exact path='/' render={() =>
            <Home />} />
          <Route exact path='/signin' render={() =>
            <SignIn userLoggedIn={(user) => this.props.setLoggedIn(user)} />} />
          <Route exact path='/signup' render={() =>
            <SignUp userSignedUp={this.props.setSignedUp} />} />
          <Route exact path='/:user' render={() => (
            <User user={user} />)} />
        </Switch>
      </div>
    )
  }
}

export default Main;