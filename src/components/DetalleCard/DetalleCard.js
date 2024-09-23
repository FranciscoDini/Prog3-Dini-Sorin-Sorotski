import "./DetalleCard.css"
import React,{Component} from "react";
import FavButton from "../FavButton/FavButton";

class DetalleCard extends Component {
    render() {
      const { movie } = this.props;
      return (
        <div className="movie-detail">
              <h1>{movie.title}</h1>
              <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title}/>
              <p>Calificación: {movie.vote_average}</p>
              <p>Fecha de Estreno: {movie.release_date}</p>
              <p>Duracion: {movie.runtime} minutos</p>
              <p>Sinopsis: {movie.overview}</p>
              <p>Genero: {movie.genres.map((genre) => genre.name).join("- ")}</p>  
              <FavButton movie={movie} />
            </div> 
            );
        };
    }
    export default DetalleCard