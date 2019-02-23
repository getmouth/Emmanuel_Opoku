import React from 'react';
import PropTypes from 'prop-types';

const Repo = (props) => (
  <div className="col-md-6 col-lg-4">
    <div className="repo">
      <div className="repo-img">
        <img src={props.repo.owner.avatar_url} alt={props.repo.name} />
      </div>
      <div className="repo-info">
        <div className="repo-text">
          <p>{props.repo.name}</p>
          <span>Forks : {props.repo.forks_count}</span>
          <span>Forks : {props.repo.language}</span>
          <span>Forks : {props.repo.updated_at}</span>
        </div>
      </div>
    </div>
  </div>
);

Repo.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default Repo;
