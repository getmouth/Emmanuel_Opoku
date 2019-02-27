/* eslint-disable consistent-return */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import Repo from './Repo';

class RepoList extends Component {
  state = {
    repos: [],
  }

  componentDidMount() {
    fetch(`${API_URL}/orgs/quandoo/repos`)
      .then(resp => resp.json())
      .then(repos => this.setState({ repos }));
  }

  render() {
    const { repos } = this.state;
    const reposOwner = () => {
      const gist = repos[0];
      if (gist) {
        return (
          <div className="repo-owner-login">
            <img
              src={gist.owner.avatar_url}
              alt="group of people happily dining"
            />
            <h1>{gist.owner.login}</h1>
          </div>
        );
      }
    };

    return (
      <div className="repo-list">
        {reposOwner()}
        <hr />
        <div className="repo-row row">
          {repos.map(repo => (
            <Repo repo={repo} key={repo.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default RepoList;
