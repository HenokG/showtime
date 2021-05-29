import Rating from '../Rating'
import React from 'react';

class Movie extends React.Component {

	render() {
		const {title, genre, reviewScore} = this.props;
		return <>
			<h3>The {title}</h3>
			{genre && <small>{genre}</small>}
			<Rating score={reviewScore}/>
		</>
	}
}

export default Movie;