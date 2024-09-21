import { Component } from "react";
import Movie from "../Movie/Movie";
import "./HomeMovies.css";

class HomeMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: [],
      peliculasMostradas: 5,
    };
  }

  componentDidMount() {
    const { url } = this.props;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ peliculas: data.results });
      })
      .catch((error) => {
        console.log("El error fue:", error);
      });
  }

  cargarMasPeliculas = () => {
    this.setState((mostradas) => ({
      peliculasMostradas: mostradas.peliculasMostradas + 5,
    }));
  };

  render() {
    const { peliculas, peliculasMostradas } = this.state;
    const { mostrarVerMas } = this.props;

    return (
      <div>
        <div className="Home-movies">
          {peliculas.slice(0, peliculasMostradas).map((pelicula, idx) => (
            <Movie key={idx} pelicula={pelicula} />
          ))}
        </div>
        {mostrarVerMas && peliculasMostradas < peliculas.length && (
          <div className="showMore">
            <button onClick={this.cargarMasPeliculas}>Ver más</button>
          </div>
        )}
      </div>
    );
  }
}

export default HomeMovies;

