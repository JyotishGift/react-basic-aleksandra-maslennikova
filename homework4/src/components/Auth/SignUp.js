import React, { Component } from 'react';
import { requestSignIn, requestSignUp } from '../../services/api';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: '',
      email: '',
      success: false,
      error: false
    }
  }
  showError = () => {
    this.setState({ error: true });
  }
  inputOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  signUpOnSubmit = (e) => {
    e.preventDefault();
    const signInStatus = requestSignUp({ email: this.state.email, user: this.state.name, password: this.state.password });
    console.log('status', signInStatus);

    signInStatus.status === 'success' ? console.log('success!!') : this.showError();
  }

  render() {
    return (
      <form onSubmit={this.signUpOnSubmit}>
        <div>{this.state.error && 'Wrong login or password'}</div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={this.inputOnChange}
        />
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
        <label htmlFor="passwordConfirm">Confirm password</label>
        <input
          type="password"
          id="passwordConfirm"
          name="passwordConfirm"
          onChange={this.inputOnChange}
        />
        <button type='submit'>Sign in</button>
      </form>
    )
  }
}

export default SignUp;