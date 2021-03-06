/* eslint-disable no-undef */
/* eslint-disable consistent-return */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import RepoBadges from './RepoBadges';
import file from '../../img/file.png';
import folder from '../../img/folder.png';
import loader from './svg/loader';

class RepoDetails extends Component {
  state = {
    contents: [],
    contributors: null,
    repo: null,
  }

  componentDidMount() {
    const { name } = this.props.match.params;

    fetch(`${API_URL}/repos/quandoo/${name}/contents`)
      .then(resp => resp.json())
      .then(contents => this.setState({ contents }));

    fetch(`${API_URL}/repos/quandoo/${name}`)
      .then(resp => resp.json())
      .then(repo => this.setState({ repo }));

    fetch(`${API_URL}/repos/quandoo/${name}/contributors`)
      .then(resp => resp.json())
      .then(contributors => this.setState({ contributors }));
    // didn't implement: redux to manage state, requests and caching.
  }


  render() {
    const { repo, contributors, contents } = this.state;
    if (!repo) {
      return <div className="repo-loading-svg">{loader()}</div>;
    }

    const renderParrent = () => {
      // if repo has parent object return it
      if (repo.parent) {
        return (
          <tr>
            <th>
              <img
                src={repo.parent.owner.avatar_url}
                alt={repo.parent.full_name}
                className="parent-img"
              />
              <span className="fork-info">Forked from : </span>
              <a href={repo.parent.owner.html_url}>{repo.parent.full_name}</a>
            </th>
          </tr>
        );
      }
      // else it returns default repo owner
      return (
        <th>
          <img
            src={repo.owner.avatar_url}
            alt={repo.owner.full_name}
            className="parent-img"
          />
          <Link to="/">
            {repo.owner.login}
          </Link>
        </th>
      );
    };


    return (
      <div className="repo-details">
        <Link to="/" className="btn btn-light">&#60;&#60;Back</Link>
        <RepoBadges
          repo={repo}
          contributors={contributors}
        /> {/* renders repo stars, contributors...badges */}
        <table className="table table-bordered"> {/* iterates and displays content object */}
          <thead className="thead-light">
            {renderParrent()}
          </thead>
          <tbody>
            {contents.map(content => (
              <tr key={content.sha}>
                <td>
                  <span className="content-image">
                    <img src={content.type === 'file' ? file : folder} alt={content.name} />
                  </span>
                  <a href={content.html_url}>{content.name}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

RepoDetails.propTypes = {
  match: PropTypes.object,
};

export default RepoDetails;
