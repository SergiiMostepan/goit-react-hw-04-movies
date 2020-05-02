import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Movies = ({ value, onChange, onSubmit }) => (
  <Fragment>
    <form onSubmit={onSubmit}>
      <input type="text" value={value} onChange={onChange}></input>
      <button type="submit"> Search </button>
    </form>
  </Fragment>
);

Movies.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Movies;
