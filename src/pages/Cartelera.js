import React, { Component } from "react";
import SimpleGrid from "../components/SimpleGrid/SimpleGrid";
import Loader from "../components/Loader/Loader";
import "./pages.css";

class Populares extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: [],
      pelisFiltradas: [],
      currentPage: 1,
      isLoading: false,
      filterValue: "",
    };
  }

  componentDidMount() {
    this.fetchMovies(this.state.currentPage);
  }

  fetchMovies(page) {
    this.setState({ isLoading: true });
    const verMasUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=1d1ffcbd926e19d7721125f17a8319dc&page=${this.state.currentPage}`;

    fetch(verMasUrl)
      .then((response) => response.json())
      .then((data) => {
        this.setState((prevState) => ({
          peliculas: prevState.peliculas.concat(data.results),
          pelisFiltradas: prevState.pelisFiltradas.concat(data.results),
          isLoading: false,
        }));
      })
      .catch((err) => {
        console.log(err);
        this.setState({ isLoading: false });
      });
  }

  handleFilter(e) {
    const userValue = e.target.value;
    this.setState({
      filterValue: userValue,
      pelisFiltradas: this.state.peliculas.filter((movie) =>
        movie.title.toLowerCase().includes(userValue.toLowerCase())
      ),
    });
  }

  handleResetFilter() {
    this.setState({
      filterValue: "",
      pelisFiltradas: this.state.peliculas,
    });
  }

  handleMoreMovies() {
    const nextPage = this.state.currentPage + 1;
    this.setState({ currentPage: nextPage }, () => {
      this.fetchMovies(nextPage);
    });
  }

  render() {
    return (
      <>
        <div className="populares">
          <h1>Películas en cartelera</h1>
          {this.state.isLoading && <Loader />}
          <div className="filter">
            <input
              type="text"
              value={this.state.filterValue}
              onChange={(e) => this.handleFilter(e)}
            />
            <button onClick={() => this.handleResetFilter()}>
              Reset Filter
            </button>
          </div>
          {this.state.isLoading && <Loader />}
          <SimpleGrid peliculas={this.state.pelisFiltradas} />
          <button
            onClick={() => this.handleMoreMovies()}
            className="ver-mas-button">
            Ver Más
          </button>
        </div>
      </>
    );
  }
}

export default Populares;