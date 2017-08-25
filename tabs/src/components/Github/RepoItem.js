import React, { Component } from 'react';

class RepoItem extends Component {
  render() {
    const { id, name } = this.props;
    return (
      <li>
        <span>
          {id}
        </span>
        <span>
          {name}
        </span>
      </li>
    );
  }
}

export default RepoItem;
