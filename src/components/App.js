import React, { Component } from 'react';
import Repo from './Repo';
import '../../public/App.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
    };
  }

  componentDidMount() {
    // GET : all repos request
    // eslint-disable-next-line no-undef
    fetch('https://api.github.com/orgs/quandoo/repos')
      .then(resp => resp.json()).then(repos => this.setState({ repos }));
  }

  render() {
    console.log(this.state.repos);
    const { repos } = this.state;
    return (
      <div className="App container">
        <h1>Quandoo Repos</h1>
        <div className="repo-row row">
          {repos.map(repo => (
            <Repo repo={repo} key={repo.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
