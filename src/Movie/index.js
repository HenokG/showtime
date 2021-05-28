import Rating from '../Rating'
import React from 'react';

class Movie extends React.Component {
	render() {
		return <><h3>The {this.props.title}</h3><Rating score={this.props.reviewScore}/></>
	}
}

export default Movie;