/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RepoDetails extends Component {
  render() {
    const { newRepo, contents } = this.props;
    if (!newRepo) {
      return <p>wating</p>;
      // TODO : Replace with a loading gif.
    }

    return (
      <div>
        <span className="badge badge-secondary">
          {newRepo.default_branch}
        </span>&emsp;
        <span className="badge badge-secondary">
          {newRepo.language}
        </span>
        <div className="row">
          <div className="col-md-3">
            {newRepo.full_name}
          </div>
          <div className="col-md-3">
            {newRepo.network_count}
          </div>
          <div className="col-md-3">
            {newRepo.stargazers_count}
          </div>
          <div className="col-md-3">
            {newRepo.subscribers_count}
          </div>
        </div>  {/* row end */}
        <div className="row">
          <div className="col-md-3">
            {newRepo.license !== null ? newRepo.license.spdx_id : ''}
          </div>
          <div className="col-md-3">
            Issues: {newRepo.open_issues_count}
          </div>
          <div className="col-md-3">
            <a href={newRepo.parent ? newRepo.parent.owner.html_url : ''}>
              {newRepo.parent ? newRepo.parent.full_name : ''}
            </a>
          </div>
          <div className="col-md-3">
            {newRepo.subscribers_count}
          </div>
        </div> {/* row end */}
        <p>{newRepo.description}</p>
        <table className="table table-bordered"> {/* loop through content object */}
          <tbody>
            {contents.map(content => (
              <tr>
                <td><a href={content.html_url}>{content.name}</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

RepoDetails.propTypes = {
  newRepo: PropTypes.object.isRequired,
  contents: PropTypes.object.isRequired,
};

export default RepoDetails;
