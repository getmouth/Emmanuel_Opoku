import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';
import star from '../../img/star.png';


const Repo = (props) => (
  <div className="col-md-6 col-lg-4">
    <div className="repo">
      <div className="repo-img">
        <img src={props.repo.owner.avatar_url} alt={props.repo.name} />
      </div>
      <div className="repo-info">
        <div className="repo-text">
          <Link to={`${props.repo.name}`} onClick={() => props.fetchContent(props.repo.name)}>
            <p onClick={() => props.fetchRepo(props.repo.name)}>{props.repo.name}</p>
          </Link>
          <span className="star"><img src={star} alt="" style={{width: '12px'}} /></span>
          <span className="star_count"> {props.repo.stargazers_count}</span>&emsp;
          <span className="language">{props.repo.language}</span><br />
          <span className="date">
            Updated on : {moment(props.repo.updated_at)
            .format('D MMM, YYYY')}
          </span>
        </div>
      </div>
    </div>
  </div>
);

Repo.propTypes = {
  repo: PropTypes.object.isRequired,
  fetchRepo: PropTypes.func.isRequired,
  fetchContent: PropTypes.func.isRequired,
};

export default Repo;
