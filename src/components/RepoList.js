import React from 'react';
import PropTypes from 'prop-types';
import Repo from './Repo';

const RepoList = ({ repos, fetchRepo }) => (
  <div>
    <h1>Quandoo Repos</h1>
    <div className="repo-row row">
      {repos.map(repo => (
        <Repo repo={repo} key={repo.id} fetchRepo={fetchRepo} />
      ))}
    </div>
  </div>
);

RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
  fetchRepo: PropTypes.func.isRequired,
};

export default RepoList;
