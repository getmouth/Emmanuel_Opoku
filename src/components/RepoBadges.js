import React from 'react';
import PropTypes from 'prop-types';
import Badge from './Badge';
import eye from '../../img/eye.png';
import star from '../../img/star.png';
import fork from '../../img/fork.png';
import person from '../../img/person.png';
import issue from '../../img/issue.png';

const RepoBadges = (props) => (
  <div className="details-badges-component">
    <div className="row">
      <div className="col-md-4">
        {props.repo.full_name}
      </div>
    </div>{/* row end */}

    <div className="row">
      <div className="col-md-6 repo-info-branch-license-lang">
        <span className="badge badge-secondary">
          {props.repo.default_branch}
        </span>
        <span className="badge badge-secondary">
          {props.repo.language}
        </span>
        <span className="badge badge-secondary">
          {props.repo.license !== null ? props.repo.license.spdx_id : ''}
        </span>
      </div>
      <div className="col-md-6 repo-fork-watcher">
        <Badge text="star" img={star}>{props.repo.stargazers_count}</Badge>
        <Badge text="watchers" img={eye}>{props.repo.subscribers_count}</Badge>
        <Badge text="Fork" img={fork}>{props.repo.network_count}</Badge>
        <Badge text="Issues" img={issue}>{props.repo.open_issues_count}</Badge>
        <Badge text="contributors" img={person}>{props.contributors ? props.contributors.length : 0}</Badge>
      </div>
    </div>  {/* row end */}

    <div className="row">
      <div className="col-md-12 repo-description">
        <p>{props.repo.description}</p>
      </div>
    </div> {/* row end */}
  </div>
);

RepoBadges.propTypes = {
  repo: PropTypes.object,
  contributors: PropTypes.object,
};

export default RepoBadges;
