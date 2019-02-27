import React from 'react';
import PropTypes from 'prop-types';

const Badge = (props) => (
  <div className="repo-badge badge badge-light">
    <span><img src={props.img} alt="" /></span>
    <span>{props.text}</span>
    <span className="badge">{props.children}</span>
  </div>
);

Badge.propTypes = {
  text: PropTypes.string,
  children: PropTypes.number,
  img: PropTypes.shape(),
};

export default Badge;
