import { Component } from "react";
import Movie from "../Movie/Movie";
import "./HomeMovies.css";
import Loader from "../Loader/Loader";

class HomeMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: [],
      isLoading: true,
      actualPage: 1,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    const { url } = this.props;
    fetch(`${url}${this.state.actualPage}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          peliculas: data.results,
          isLoading: false,
          actualPage: this.state.actualPage + 1,
        });
      })
      .catch((error) => {
        console.log("El error fue:", error);
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { peliculas, isLoading } = this.state;
    const { peliculasMostradas } = this.props;

    return (
      <div>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="Home-movies">
            {peliculas.slice(0, peliculasMostradas).map((pelicula, idx) => (
              <Movie key={idx} pelicula={pelicula} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default HomeMovies;
