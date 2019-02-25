/* eslint-disable consistent-return */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RepoDetails extends Component {
  displayContent = () => (
    this.props.contents.map(content => (
      <tr key={content.sha}>
        <td><a href={content.html_url}>{content.name}</a></td>
      </tr>
    ))
  );

  render() {
    const { newRepo } = this.props;
    if (!newRepo) {
      return <p>wating</p>;
      // TODO : Replace with a loading gif.
    }

    const renderParrent = () => {
      if (newRepo.parent) {
        return (
          <th>
            <td>
              <img
                src={newRepo.parent.owner.avatar_url}
                alt={newRepo.parent.full_name}
              />
            </td>
            <td>
              <a href={newRepo.parent.owner.html_url}>
                {newRepo.parent.full_name}
              </a>
            </td>
          </th>
        );
      }
      return (
        <a href={newRepo.owner.html_url}>
          <img src={newRepo.owner.avatar_url} alt={newRepo.owner.full_name} />
          {newRepo.owner.full_name}
        </a>
      );
    };


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
            {newRepo.subscribers_count}
          </div>
        </div> {/* row end */}
        <p>{newRepo.description}</p>
        <table className="table table-bordered"> {/* loop through content object */}
          <thead className="thead-light">
            <tr>
              {renderParrent()}
            </tr>
          </thead>
          <tbody>
            {this.displayContent()}
          </tbody>
        </table>
      </div>
    );
  }
}

RepoDetails.propTypes = {
  newRepo: PropTypes.object,
  contents: PropTypes.array.isRequired,
};

export default RepoDetails;
