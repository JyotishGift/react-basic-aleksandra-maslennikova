import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


class User extends Component {
  renderUsers = () => {
    const users = this.props.users.map((user, index) => (<li key={index}>{user.name}</li>));
    console.log(users);
    return users;
  };

  render() {

    return (!this.props.user.name ?
      <div>Hello, guest</div> :
      (!this.props.users.length ?
        <div>Loading..... </div> :
        <div >
          <div>Hello, {this.props.user.name} </div>
          <ul>{this.renderUsers()}</ul> </div>))
  }
}

export default User;
