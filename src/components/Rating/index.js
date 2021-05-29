import React from 'react';

class Rating extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			score: props.score
		};
	}

	incrementScore() {
		this.setState({score: this.state.score + 1});
	}

	render() {
		return <small onClick={() => this.incrementScore()}>{this.state.score}</small>
	}
}

export default Rating;