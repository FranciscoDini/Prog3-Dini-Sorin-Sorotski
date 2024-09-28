import React, { Component } from "react";
import SimpleGrid from "../components/SimpleGrid/SimpleGrid";
import "./pages.css";

class Cartelera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculasCartelera: [],
      currentPage: 1,
      isLoading: false,
    };
  }

  componentDidMount() {
    this.loadMovies();
  }

  loadMovies = () => {
    const carteleraUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=1d1ffcbd926e19d7721125f17a8319dc&page=${this.state.currentPage}`;

    this.setState({ isLoading: true });

    fetch(carteleraUrl)
      .then((response) => response.json())
      .then((data) => {
        const peliculasActualizadas = [];

        for (let i = 0; i < this.state.peliculasCartelera.length; i++) {
          peliculasActualizadas.push(this.state.peliculasCartelera[i]);
        }

        for (let j = 0; j < data.results.length; j++) {
          peliculasActualizadas.push(data.results[j]);
        }

        this.setState({
          peliculasCartelera: peliculasActualizadas,
          currentPage: this.state.currentPage + 1,
          isLoading: false,
        });
      })
      .catch((error) => {
        console.error("Error al cargar las películas:", error);
        this.setState({ isLoading: false });
      });
  };

  render() {
    const { peliculasCartelera, isLoading } = this.state;

    return (
      <div className="cartelera">
        <h1>Películas en cartelera</h1>
        <SimpleGrid peliculas={peliculasCartelera} />
        {peliculasCartelera.length > 0 && (
          <button
            onClick={this.loadMovies}
            disabled={isLoading}
            className="ver-mas-button"
          >
            {isLoading ? "Cargando..." : "Ver Más"}
          </button>
        )}
      </div>
    );
  }
}

export default Cartelera;

  