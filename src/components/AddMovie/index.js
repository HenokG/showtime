import React from 'react';

class AddMovie extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			title: '',
			genre: 'action',
		}
	}

	onSubmit(e) {
		e.preventDefault();
		this.props.onAddMovie({title: this.state.title, genre: this.state.genre});
	}

	render() {
		return <>{this.state.title && <b>New {this.state.genre} movie coming up: {this.state.title}</b>}
			<form onSubmit={(e) => this.onSubmit(e)}>
				<input type='text' value={this.state.title} onChange={(e) => this.setState({title: e.target.value})}/>
				<select value={this.state.genre} onChange={(e) => this.setState({genre: e.target.value})}>
					<option value="action">Action</option>
					<option value="comedy">Comedy</option>
					<option value="romance">Romance</option>
				</select>
				<button>Add</button>
			</form>
			</>
	}
}

export default AddMovie;