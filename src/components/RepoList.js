import React from 'react';
import PropTypes from 'prop-types';
import Repo from './Repo';

const RepoList = ({ repos, fetchRepo, fetchContent }) => (
  <div>
    <h1>Quandoo Repos</h1>
    <div className="repo-row row">
      {repos.map(repo => (
        <Repo repo={repo} key={repo.id} fetchRepo={fetchRepo} fetchContent={fetchContent} />
      ))}
    </div>
  </div>
);

RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
  fetchRepo: PropTypes.func.isRequired,
  fetchContent: PropTypes.func.isRequired,
};

export default RepoList;
