import Rating from '../Rating';
import React from 'react';
import PropTypes from 'prop-types';

class Movie extends React.Component {
  render() {
    const { title, genre, reviewScore } = this.props;
    return (
      <>
        <h3>The {title}</h3>
        {genre && <small>{genre}</small>}
        <Rating score={reviewScore} />
      </>
    );
  }
}

Movie.propTypes = {
  title: PropTypes.string,
  genre: PropTypes.string,
  reviewScore: PropTypes.number,
};

export default Movie;
