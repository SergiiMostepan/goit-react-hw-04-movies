import React, { Component } from 'react';
import { NavLink, Route, Link, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoaderSpiner from '../Loader/Loader';
import Cast from './Cast';
import Review from './Review';
import { fetchFilm } from '../../utils/FetchArticlies';
import styles from './Movie.module.css';

export default class Movie extends Component {
  static propTypes = {
    state: PropTypes.array,
    match: PropTypes.object,
  };

  state = {
    film: [],
    currentQS: null,
    from: null,
    isLoading: false,
  };

  componentDidMount() {
    this.setState({
      isLoading: true,
    });
    const { state } = this.props.history.location;

    fetchFilm(this.props.match.params.id)
      .then(data => {
        this.setState({
          film: data,
        });
      })
      .finally(
        this.setState({
          isLoading: false,
        }),
      );
    this.setState({
      currentQS: state ? this.props.history.location.state.currentQS : '',
      from: state ? this.props.location.state.from : '/movies',
    });
  }

  render() {
    const {
      poster_path,
      original_title,
      release_date,
      vote_average,
      overview,
      genres,
      id,
    } = this.state.film;
    const date = new Date(release_date).getFullYear();

    return (
      <div>
        {this.state.isLoading && <LoaderSpiner />}
        <Link
          className={styles.goBackBtn}
          to={{
            pathname: this.state.from,
            state: this.state.currentQS,
          }}
        >
          Go back
        </Link>
        <div>
          <div>
            <img
              className={styles.image}
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={original_title}
            ></img>
          </div>
          <div>
            <h3>
              <span> {original_title} </span> <span> ({date}) </span>
            </h3>
            <div> User score: {vote_average * 10} % </div> <h4> Overview </h4>
            <div> {overview} </div> <h5> Genres </h5>
            <div>
              {genres &&
                genres.map(ganre => <span key={ganre.id}> {ganre.name} </span>)}
            </div>
          </div>
          <h6> Additional information </h6>
          <ul>
            <li>
              <NavLink to={`/movies/${id}/cast`}> Cast </NavLink>
            </li>
            <li>
              <NavLink to={`/movies/${id}/reviews`}> Review </NavLink>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path={`${this.props.match.path}/cast`} component={Cast} />
          <Route path={`${this.props.match.path}/reviews`} component={Review} />
        </Switch>
      </div>
    );
  }
}
