import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const FilmList = ({ films, location, currentQS }) => (
  <ul>
    {films.map(film => (
      <li key={film.id}>
        <Link
          to={{
            pathname: `movies/${film.id}`,
            state: {
              from: location,
              currentQS: currentQS,
            },
          }}
        >
          {film.title ? film.title : film.original_name}
        </Link>
      </li>
    ))}
  </ul>
);

FilmList.propTypes = {
  films: PropTypes.array.isRequired,
  location: PropTypes.string.isRequired,
  currentQS: PropTypes.string,
};

export default FilmList;
