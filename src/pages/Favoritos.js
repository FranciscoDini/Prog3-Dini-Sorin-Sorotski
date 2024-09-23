import "./pages.css";
import React, { Component } from "react";
import FavButton from "../components/FavButton/FavButton";
import { Link } from "react-router-dom";
import Loader from "../components/Loader/Loader";

class Favoritos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    const storage = localStorage.getItem("favoritos");
    if (storage !== null) {
      const parsedStorage = JSON.parse(storage);

      Promise.all(
        parsedStorage.map((id) =>
          fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=1d1ffcbd926e19d7721125f17a8319dc`
          ).then((response) => response.json())
        )
      )
        .then((movies) => {
          this.setState({
            movies,
            isLoading: false,
          });
        })
        .catch((error) => {
          console.log("El error fue:", error);
          this.setState({ isLoading: false });
        });
    } else {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { movies, isLoading } = this.state;

    return (
      <>
        <h2 className="fav-title">Mis Películas Favoritas</h2>
        <div className="fav-list">
          {isLoading ? (
            <Loader />
          ) : movies.length > 0 ? (
            movies.map((movie) => (
              <div key={movie.id} className="fav-movie">
                <h3>{movie.title}</h3>
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt={movie.title}
                />
                <FavButton movie={movie} />
                <p className="more">
                  <Link to={`/detalle/id/${movie.id}`} className="link">
                    Ir a detalle
                  </Link>
                </p>
              </div>
            ))
          ) : (
            <img
              className="sin-fav"
              src="/images/sinFavoritos.webp"
              alt="No tienes películas en favoritos"
            />
          )}
        </div>
      </>
    );
  }
}

export default Favoritos;
