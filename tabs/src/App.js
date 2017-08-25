import React, { Component } from 'react';
import './App.css';
import Github from './components/Github/Github';
import YouTube from './components/YouTube/YouTube';
import Header from './components/Header/Header';
import Buttons from './components/Tabs/Buttons';
import TabContent from './components/Tabs/TabContent';



class App extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: <Github />,
      tabs: {
        1: <Github />,
        2: <Header />,
        3: <YouTube />
      }
    }
  }
  setActiveTab = (number) => {
    this.setState({ activeTab: this.state.tabs[number] })
  }
  render() {
    return (
      <div className="App">
        <TabContent>{this.state.activeTab} </TabContent>
        <Buttons>
          <button onClick={() => this.setActiveTab(1)}>1</button>
          <button onClick={() => this.setActiveTab(2)}>2</button>
          <button onClick={() => this.setActiveTab(3)}>3</button>
        </Buttons>
      </div>
    );
  }
}

export default App;
