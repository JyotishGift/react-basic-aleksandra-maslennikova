import React, { Component } from 'react';
import { requestSignIn, requestSignUp } from '../../services/api';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: '',
      success: false,
      error: false
    }
  }
  showError = () => {
    this.setState({ error: true });
  }
  inputOnChange = (e) => {
    if (e.target.name === 'name') {
      this.setState({ [e.target.name]: e.target.value });
    }
  }
  signInOnSubmit = (e) => {
    e.preventDefault();
    const signInStatus = requestSignIn(this.state.name, this.state.password);
    console.log(signInStatus);
    signInStatus.PromiseValue.status === 'success' ? this.props.userLoggedIn() : this.showError();
  }

  render() {
    return (
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