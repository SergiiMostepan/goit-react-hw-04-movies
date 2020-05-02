import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchFilm } from '../../utils/FetchArticlies';
import style from './Cast.module.css';
import LoaderSpiner from '../Loader/Loader';

export default class Cast extends Component {
  static propTypes = {
    match: PropTypes.object,
  };

  state = {
    cast: [],
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetchFilm(this.props.match.params.id, '/credits')
      .then(data => {
        this.setState({
          cast: data.cast,
        });
      })
      .finally(this.setState({ isLoading: false }));
  }

  render() {
    const { cast } = this.state;
    return (
      <div>
        {this.state.isLoading && <LoaderSpiner />}
        {cast.map(
          (item, idx) =>
            idx <= 10 && (
              <div key={item.id}>
                <div>
                  <img
                    className={style.image}
                    src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                    alt={item.name}
                  ></img>
                </div>
                <div> {item.name} </div>
                <div> Character: {item.character} </div>
              </div>
            ),
        )}
      </div>
    );
  }
}
