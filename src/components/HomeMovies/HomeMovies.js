import { Component } from "react";
import Movie from "../Movie/Movie"

class HomeMovies extends Component{
    render(){
        const {peliculas}= this.props;
        
        return (
            <div className="Home-movies">
                {peliculas.map((pelicula,idx)=>(
                    <Movie
                    key={idx}
                    pelicula={pelicula}
                />
                ))}
            </div>
        );
    }
}

export default HomeMovies