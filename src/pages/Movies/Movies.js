import React, { Component, Fragment } from 'react';
import queryString from 'query-string';
import SeachBar from '../../components/SearchBar/SearchBar';
import { fetchFilms } from '../../utils/FetchArticlies';
import FilmList from '../Home/FilmList';
import PropTypes from 'prop-types';

const apiCall = `/search/movie/`;
const myQuery = query => `&query=${query}`;
const getCategoryFromLocation = props =>
  queryString.parse(props.location.search).query;

export default class Movies extends Component {
  static propTypes = {
    query: PropTypes.string,
    hendleChange: PropTypes.func.isRequired,
  };

  state = {
    films: [],
    currentQuery: '',
  };

  hendleQueryChange = query => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`,
    });
  };

  hendleQuerySubmit = e => {
    e.preventDefault();
    this.hendleQueryChange(this.props.query);
    this.setState({
      currentQuery: this.props.query,
    });
  };

  componentDidMount() {
    const queryString = getCategoryFromLocation(this.props);
    this.setState({
      currentQuery: queryString,
    });

    this.props.location.state &&
      this.hendleQueryChange(this.props.location.state);
    this.props.location.state &&
      fetchFilms(apiCall, myQuery(this.props.location.state)).then(data =>
        this.setState({
          films: [...data.results],
        }),
      );
  }

  componentDidUpdate(prevProps, prevState) {
    this.state.currentQuery &&
      fetchFilms(apiCall, myQuery(this.state.currentQuery)).then(data =>
        this.setState({
          films: [...data.results],
        }),
      );
    this.state.currentQuery &&
      this.setState({
        currentQuery: '',
      });
  }

  render() {
    const { films } = this.state;
    const currentQS = getCategoryFromLocation(this.props);
    return (
      <Fragment>
        <SeachBar
          value={this.props.query}
          onChange={this.props.hendleChange}
          onSubmit={this.hendleQuerySubmit}
        />
        <FilmList
          films={films}
          // match={this.props.match}
          location={this.props.location.pathname}
          currentQS={currentQS}
        />
      </Fragment>
    );
  }
}
