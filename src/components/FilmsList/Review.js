import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchFilm } from '../../utils/FetchArticlies';
import styles from './Review.module.css';
import LoaderSpiner from '../Loader/Loader';

export default class Review extends Component {
  static propTypes = {
    match: PropTypes.object,
  };

  state = {
    review: [],
    isLoading: true,
  };

  componentDidMount() {
    this.setState({
      isLoading: true,
    });
    fetchFilm(this.props.match.params.id, '/reviews')
      .then(data => {
        this.setState({
          review: data.results,
        });
      })
      .finally(
        this.setState({
          isLoading: false,
        }),
      );
  }

  render() {
    const { review } = this.state;
    return (
      <div>
        {this.state.isLoading && <LoaderSpiner />}
        {review.length > 0 ? (
          review.map(item => (
            <div key={item.id} className={styles.container}>
              <div className={styles.author}> Author: {item.author} </div>
              <div> {item.content} </div>
            </div>
          ))
        ) : (
          <div> We don 't have any reviews for this movie</div>
        )}
      </div>
    );
  }
}
