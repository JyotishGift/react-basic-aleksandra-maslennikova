import React, { Component } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Api from './services/api';
import './theme/App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      users: null,
      signedIn: false,
      signedUp: false,
    }
  }
  getUsers = (token) => {
    const fetchedUsers = Api.fetchUsers(token);
    fetchedUsers.then(data => {
      console.log(data);
      const newUsers = Object.keys(data.message).map(user => data.message[user]);
      console.log('newUsers', newUsers);
      this.setState({ users: newUsers })
    })
  }
  componentDidMount() {
    this.updateState();
  }

  updateState = () => {
    const storageUser = localStorage.getItem('user');
    const loggedUser = JSON.parse(storageUser);
    const token = localStorage.getItem('token');
    const parsedToken = JSON.parse(token);
    parsedToken ? this.getUsers(parsedToken) : this.setState({ users: [] })
    if (loggedUser) {
      const storageUsers = localStorage.getItem('users');
      const newUsers = JSON.parse(storageUsers);
      this.setState({ user: loggedUser, signedIn: true });
    } else {
      this.setState({ user: {} })
    }
  }
  setSignedIn = (loggedInUser) => {
    this.setState({ signedIn: true, user: loggedInUser });
    this.updateState();
  }
  setSignedUp = () => {
    this.setState({ signedUp: true });
  }
  setSignedOut = () => {
    this.setState({ signedUp: false, signedIn: false, user: {} });
    localStorage.clear();
  }
  setUsers = (fetchedUsers) => {
    this.setState({ users: fetchedUsers })
  }
  render() {
    if (!this.state.user || !this.state.users) {
      return (<div>Loading....</div>)
    } else {
      return (<div className="App">
        <Header
          signedIn={this.state.signedIn}
          userName={this.state.user.name}
          setSignOut={this.setSignedOut} />
        <Main
          user={this.state.user}
          users={this.state.users}
          setSignedIn={this.setSignedIn}
          setSignedUp={this.setSignedUp}
          signedIn={this.state.signedIn}
          setUsers={this.setUsers} />
        <Footer />
      </div>
      );
    }
  }
}

export default App;
