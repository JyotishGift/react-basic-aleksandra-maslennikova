import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Api from '../../services/api';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: '',
      passwordConfirm: '',
      email: '',
      success: false,
      error: false,
      status: null,
      passwordError: false,
      message: ''
    }
  }
  showError = () => {
    this.setState({ error: true });
  }
  inputOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  passwordIsConfirmed = () => {
    const { password, passwordConfirm } = this.state;
    return password === passwordConfirm;
  };


  signUpOnSubmit = (e) => {
    e.preventDefault();

    if (this.passwordIsConfirmed()) {
      const signUpStatus = Api.requestSignUp({ email: this.state.email, user: this.state.name, password: this.state.password })
      signUpStatus.then(data => { this.setState({ status: data.status, message: data.message })
      console.log('status', this.state.status);
      this.state.status === 'success' ? this.props.userSignedUp() : this.showError();})
    } else {
      this.setState({ passwordError: true })
    }
  }

    render() {
      return (
        this.state.status === 'success' ?
        <Redirect to={'/signin'} /> :
        <form onSubmit={this.signUpOnSubmit}>
          <div>{this.state.error && `${this.state.message}`}</div>
          <div>{this.state.passwordError && 'Password confirmation failed'}</div>
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