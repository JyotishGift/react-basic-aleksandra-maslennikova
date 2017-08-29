import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './Main.css';
import SignIn from '../Auth/SignIn';
import SignUp from '../Auth/SignUp';
import User from '../User/User';

class Main extends Component {
  render() {
    const { user, users } = this.props;
    return (
      <div className="Main">
        <Switch>
          <Route exact path='/signin' render={() =>
            <SignIn
              userSignedIn={(user) => this.props.setSignedIn(user)}
              setUsers={(users) => this.props.setUsers(users)}
            />} />
          <Route exact path='/signup' render={() =>
            <SignUp userSignedUp={this.props.setSignedUp} />} />
          <Route exact path='/' render={() => (
            <User user={user} users={users} />)} />
        </Switch>
      </div>
    )
  }
}

export default Main;