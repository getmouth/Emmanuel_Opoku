import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({ hero }) => {
  return (
    <div className="hero">
      <div className="hero-img"><img src={hero} alt="group of people happily dining" /></div>
    </div>
  );
};

Hero.propTypes = {
  hero: PropTypes.string,
};

export default Hero;
