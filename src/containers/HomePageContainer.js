import React, {Component} from 'react';
import MovieList from './MovieListContainer';

class App extends Component {

  componentDidMount(){
    console.log(this.props); 
    this.props.showAllMovies();
  }

  onSelected = (selected) => {
    this.setState({
      selected
    });
  }

   add(){
    let movie2add={title:"Mayday", author: "SumFUk",year:2020};
    this.props.addMovie(movie2add);  
    }

  render(){
    const {movies,loaded, editMovie} =this.props;
    console.log("employees homeph list", movies);
  return (
    <div>{loaded &&
      <MovieList updateMovie={editMovie} 
      movies={movies} />}
    
    <button onClick={this.add.bind(this)}>Add</button>
    </div>
  );
  }
}

export default App;
