import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './Main.css';
import SignIn from '../Auth/SignIn';
import SignUp from '../Auth/SignUp';
import User from '../User/User';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      loggedIn: false
    }
  }
  setLoggedIn = () => {
    this.setState({ loggedIn: true });
  }
  render() {
    const { user } = this.state;
    return (
      <div className="Main">
        <Switch>
        {this.state.loggedIn && <Redirect to={`/${user}`} />}
          <Route exact path='/signin' render={() =>
            <SignIn userLoggedIn={this.setLoggedIn} />} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/:user' render={user => (
            <User {...user} />)} />
        </Switch>
      </div>
    )
  }
}

export default Main;