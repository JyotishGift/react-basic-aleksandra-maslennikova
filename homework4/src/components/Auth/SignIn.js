import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Api from '../../services/api';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: '',
      success: false,
      error: false,
      status: null
    }
  }
  showError = () => {
    this.setState({ error: true });
  }
  inputOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  signInOnSubmit = (e) => {
    e.preventDefault();
    const signInStatus = Api.requestSignIn({ user: this.state.name, password: this.state.password });
    signInStatus.then(data => {
      console.log('signInData', data);
      this.setState({ status: data.status, token: data.message.token, user: data.message.user });
      console.log(this.state.status);
      console.log(this.state.token);
      this.state.status === 'success' ? this.props.userLoggedIn(data.message.user) : this.showError();
    });

  }

  render() {
    return (
      this.state.status === 'success' ?
        <Redirect to={`/${this.state.user.name}`} /> :
        <form onSubmit={this.signInOnSubmit}>
          <div>{this.state.error && 'Wrong login or password'}</div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={this.inputOnChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={this.inputOnChange}
          />
          <button type='submit'>Sign in</button>
        </form>
    )
  }
}

export default SignIn;