import { Component } from "react";
import Movie from "../Movie/Movie";
import "../HomeMovies/HomeMovies.css"; 

class SimpleGrid extends Component {
  render() {
    const { peliculas } = this.props; 

    return (
      <div>
        <div className="movies-list">
          {peliculas.map((pelicula, idx) => (
            <Movie key={idx} pelicula={pelicula} />
          ))}
        </div>
      </div>
    );
  }
}

export default SimpleGrid;
