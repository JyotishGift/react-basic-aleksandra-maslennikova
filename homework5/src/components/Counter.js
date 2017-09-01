import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';

class Counter extends Component {
  showHistory(history) {
    return history.map((num, index) =>
      <li key={index}>
        {num}
      </li>
    );
  }
  render() {
    const {
      counter,
      increment,
      decrement,
      history
    } = this.props;
    const counterHistory = this.showHistory(history);
    return (
      <div>
        <div>
          Counter:
          <span>{counter}</span>
        </div>
        <button onClick={increment}>INCREMENT</button>
        <button onClick={decrement}>DECREMENT</button>
        <span style={{ float: 'right' }}>
          {counterHistory}
        </span>
      </div>
    );
  }
}

// history
const mapStateToProps = state => {
  console.log(state);
  return {
    counter: state.counterReducer.counter,
    history: state.counterReducer.history
  };
};

const mapDispatchToProps = dispatch => {
  // если мы решими передать события ниже по компонентам
  return {
    ...bindActionCreators(actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  Counter
);
