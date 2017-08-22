import React from 'react';
import RepoItem from './RepoItem';

const url =
  'https://api.github.com/users/aleksandra-maslennikova/repos';
class Github extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }


  componentDidMount() {
    fetch(url).then(data => data.json()).then(data => {
      console.log(data);
      this.setState({ data: data });
    });
  }

  render() {
    if (!this.state.data.length) {
      return <div>Loading...</div>;
    }
    return (
      <ul>  
        {this.state.data.map((elem, index) => {
          return (
            <RepoItem
              name={elem.name}
              fullname={elem.fullname}
              id={index}
            />
          );
        })}
      </ul>
    );
  }
}

export default Github;
