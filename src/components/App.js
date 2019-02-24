import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import '../../public/App.css';
import RepoList from './RepoList';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      currentRepo: null,
    };
  }
  // TODO: manage state with redux

  componentDidMount() {
    // GET : all repos request
    // eslint-disable-next-line no-undef
    fetch('https://api.github.com/orgs/quandoo/repos')
      .then(resp => resp.json()).then(repos => this.setState({ repos }));
  }

  fetchRepo = (name) => (
    fetch(`https://api.github.com/repos/quandoo/${name}`)
      .then(resp => resp.json()).then(repo => this.setState({ currentRepo: repo }))
  );

  render() {
    const { repos } = this.state;
    return (
      <div className="App container">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => <RepoList repos={repos} fetchRepo={this.fetchRepo} />} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
