import { Component } from "react";
import HomeMovies from "../components/HomeMovies/HomeMovies";
import { Link } from "react-router-dom";
import "./pages.css";
import SearchForm from "../components/SearchForm/SearchForm";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculasPopulares: [],
      peliculasCartelera: [],
    };
  }

  render() {
    const popularesUrl =
      "https://api.themoviedb.org/3/movie/popular?api_key=1d1ffcbd926e19d7721125f17a8319dc&page=";
    const carteleraUrl =
      "https://api.themoviedb.org/3/movie/now_playing?api_key=1d1ffcbd926e19d7721125f17a8319dc&page=";
    return (
      <div className="home">
        <SearchForm history={this.props.history}/>
        <h1>SSD Movies</h1>

        <h2>Películas más populares</h2>
        <HomeMovies url={popularesUrl} home={true} peliculasMostradas={5} /> {/* Mostrando solo 5 películas */}
        <div className="button-container">
          <Link to="/populares" className="button verTodas">
            Ver todas
          </Link>
        </div>

        <h2>Películas cartelera</h2>
        <HomeMovies url={carteleraUrl} home={true} peliculasMostradas={5} /> {/* Mostrando solo 5 películas */}
        <div className="button-container">
          <Link to="/cartelera" className="button verTodas">
            Ver todas
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
