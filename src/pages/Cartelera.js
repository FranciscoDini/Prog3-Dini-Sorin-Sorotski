import HomeMovies from "../components/HomeMovies/HomeMovies";
import "./pages.css"
import { Component } from "react";

class Cartelera extends Component {
    constructor(props) {
      super(props);
      this.state = {
        peliculasCartelera: [],
      };
    }
  
    render() {
      const carteleraUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=1d1ffcbd926e19d7721125f17a8319dc&page=';
      return (
        <div className="cartelera">
          <h1>Películas cartelera</h1>
          <HomeMovies url={carteleraUrl} mostrarVerMas={true} /> 
        </div>
      );
    }
  }
  
  export default Cartelera;
  