import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './theme/App.css';

class App extends Component {
  render() {
    return (<div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
    );
  }
}

export default App;
