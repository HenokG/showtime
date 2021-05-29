import logo from './logo.svg';
import './App.css';
import Movie from './components/Movie';
import AddMovie from './components/AddMovie';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
          title: 'Eternals',
          genre: 'Epic',
        },
      ],
    };
  }

  onAddMovie({ title, genre }) {
    this.setState({
      movies: [...this.state.movies, { title, genre }],
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <AddMovie onAddMovie={(movie) => this.onAddMovie(movie)} />
          {this.state.movies &&
            this.state.movies.map((movie) => (
              <Movie {...movie} reviewScore={3} />
            ))}
        </header>
      </div>
    );
  }
}

export default App;
