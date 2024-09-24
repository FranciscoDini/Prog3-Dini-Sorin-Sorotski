import { Component } from "react";
import HomeMovies from "../components/HomeMovies/HomeMovies";
//import {Link} from "react-router-dom"
import "./pages.css"

class Populares extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculasPopulares: [],
    };
  }



  render() {
    const popularesUrl = "https://api.themoviedb.org/3/movie/popular?api_key=1d1ffcbd926e19d7721125f17a8319dc&page=";
    return (
      <div className="populares">
        <h1>Películas populares</h1>
        <HomeMovies url={popularesUrl} mostrarVerMas={true} /> 
      </div>
    );
  }
}

export default Populares;
