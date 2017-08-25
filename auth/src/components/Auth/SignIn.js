import React, { Component } from 'react';


class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: ''
    }
  }
  inputOnChange = (e) => {
    if (e.target.name === 'name') {
      this.setState({ name: e.target.value });
      console.log(this.state.name);
    }
    if (e.target.name === 'password') {
      this.setState({ password: e.target.value });
      console.log(this.state.password);
    }
  }


  render() {
    return (
      <div>
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
      </div>
    )
  }
}

export default SignIn;