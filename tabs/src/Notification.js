import React, { Component } from 'react';

class Notification extends Component {
  render() {
    return (
      <ul>
        Some error !
        {this.props.children}
      </ul>
    );
  }
}

export default Notification;