import React, { Component, Fragment } from 'react';
import FilmList from './FilmList';
import { fetchFilms } from '../../utils/FetchArticlies';

const apiCall = '/trending/all/day';
export default class Home extends Component {
  state = {
    films: [],
  };

  componentDidMount() {
    fetchFilms(apiCall).then(data => {
      this.setState({ films: data.results });
    });
  }

  render() {
    const { films } = this.state;
    return (
      <Fragment>
        <h1>Trending today</h1>
        <FilmList films={films} location={this.props.location.pathname} />
      </Fragment>
    );
  }
}
