import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Api from '../../services/api';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
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
      this.setState({ status: data.status });
      localStorage.setItem('user', JSON.stringify(data.message.user));
      localStorage.setItem('token', JSON.stringify(data.message.token));
      this.state.status === 'success' ? this.props.userSignedIn(data.message.user) : this.showError();
    });
  }

  render() {
    return (
      this.state.status === 'success' ?
        <Redirect to={`/`} /> :
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