import { Component } from "react";
import Movie from "../Movie/Movie";
import "./HomeMovies.css";
import Loader from "../Loader/Loader"

class HomeMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: [],
      peliculasMostradas: 50000,
      isLoading: true,
      actualPage: 1
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    })
    const { url } = this.props;
    fetch(`${url}${this.state.actualPage}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ peliculas: data.results, isLoading: false, actualPage: this.state.actualPage + 1 });
      })
      .catch((error) => {
        console.log("El error fue:", error);
      });
  }

  cargarMasPeliculas = () => {
    this.setState({
      isLoading: true
    })
    const { url } = this.props;
    fetch(`${url}${this.state.actualPage}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ 
          peliculas: this.state.peliculas.concat(data.results), 
          isLoading: false, actualPage: this.state.actualPage + 1 });
      })
      .catch((error) => {
        console.log("El error fue:", error);
      });
  };

  render() {
    const { peliculas, peliculasMostradas, isLoading } = this.state;
    const { mostrarVerMas } = this.props;

    return (
      <div>
        {isLoading ? ( 
          <Loader />
        ) : (
          <div className="Home-movies">
            {this.state.peliculas.slice(0, peliculasMostradas).map((pelicula, idx) => (
              <Movie key={idx} pelicula={pelicula} />
            ))}
          </div>
        )}
    
       
          <div className="showMore">
            <button onClick={this.cargarMasPeliculas}>Ver más</button>
          </div>
       
      </div>
    );
    
  }
}

export default HomeMovies;
