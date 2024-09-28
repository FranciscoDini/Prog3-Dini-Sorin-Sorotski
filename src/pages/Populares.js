import React, { Component } from "react";
import SimpleGrid from "../components/SimpleGrid/SimpleGrid";
import "./pages.css";

class Populares extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculasPopulares: [],
      currentPage: 1,
      isLoading: false,
    };
  }

  componentDidMount() {
    this.loadPopularMovies();
  }

  loadPopularMovies = () => {
    const popularesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=1d1ffcbd926e19d7721125f17a8319dc&page=${this.state.currentPage}`;

    this.setState({ isLoading: true });

    fetch(popularesUrl)
      .then((response) => response.json())
      .then((data) => {
        const peliculasActualizadas = [];

        for (let i = 0; i < this.state.peliculasPopulares.length; i++) {
          peliculasActualizadas.push(this.state.peliculasPopulares[i]);
        }

        for (let j = 0; j < data.results.length; j++) {
          peliculasActualizadas.push(data.results[j]);
        }

        this.setState({
          peliculasPopulares: peliculasActualizadas,
          currentPage: this.state.currentPage + 1,
          isLoading: false,
        });
      })
      .catch((error) => {
        console.error("Error al cargar las películas populares:", error);
        this.setState({ isLoading: false });
      });
  };

  render() {
    const { peliculasPopulares, isLoading } = this.state;

    return (
      <div className="populares">
        <h1>Películas populares</h1>
        <SimpleGrid peliculas={peliculasPopulares} />
        {peliculasPopulares.length > 0 && (
          <button
            onClick={this.loadPopularMovies}
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

export default Populares;
