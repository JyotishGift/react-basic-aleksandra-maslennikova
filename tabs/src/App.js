import React, { Component } from 'react';
import './App.css';
import Github from './Github';

const Buttons = (props) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

const TabContent = (props) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: <Github />,
      activeButton: 1,
      tabs: {
        1: <Github />,
        2: <Header />,
        3: <YouTube />
      }
    }
  }
  render() {
    return (
      <div className="App">
        <TabContent>{this.state.activeTab} </TabContent>
        <Buttons>
          <button onClick={this.setActiveButton}>1</button>
          <button>2</button>
          <button>3</button>
        </Buttons>
      </div>
    );
  }
}

export default App;
