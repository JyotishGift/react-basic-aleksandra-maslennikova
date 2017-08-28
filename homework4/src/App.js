import React, { Component } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './theme/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      loggedIn: false,
      signedUp: false,
    }
  }
  setLoggedIn = (loggedInUser) => {
    this.setState({ loggedIn: true, user: loggedInUser });
  }
  setSignedUp = () => {
    this.setState({ signedUp: true });
  }
  setSignedOut = () => {
    const { history } = this.props;
    this.setState({ signedUp: false, loggedIn: false, user: {} });

  }
  render() {
    return (<div className="App">
      <Header loggedIn={this.state.loggedIn} userName={this.state.user.name} setSignOut={this.setSignedOut} />
      <Main user={this.state.user} setLoggedIn={this.setLoggedIn} setSignedUp={this.setSignedUp} loggedIn={this.state.loggedIn} />
      <Footer />
    </div>
    );
  }
}

export default App;
