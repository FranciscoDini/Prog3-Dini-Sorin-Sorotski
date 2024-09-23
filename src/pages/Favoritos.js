import "./pages.css"
import React, { Component } from "react";
import FavButton from '../components/FavButton/FavButton'

class Favoritos extends Component{
  constructor(props){
    super(props);
    this.state={
      movies: []
    }
  }

  componentDidMount (){
    const storage= localStorage.getItem('favoritos');
    if (storage !== null) {
      const parsedStorage = JSON.parse(storage);
      
      Promise.all(
        parsedStorage.map(id=>
          fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=1d1ffcbd926e19d7721125f17a8319dc`)
          .then((response) => response.json())
        ))
          .then (movies => {
            this.setState({movies});
          })
          .catch((error) => {
            console.log("El error fue:", error);
          })
    } }

    render(){
      const {movies} = this.state;

      return(
        <div>
          <h2>Mis peliculas Favoritas</h2>
          <div className="fav-list">
            {movies.length >0 ?(
              movies.map(movie=>(
                <div key={movie.id} className="fav-movie">
                  <h3>{movie.title}</h3>
                  <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title}/> 
                  <FavButton movie={movie}/>
                  </div> 
                  )) 
                  ) : ( 
                  <p>No hay pelis en favoritos.</p>  
                  )} 
            </div> 
          </div> );
    }


}
 
  export default Favoritos