import {Component} from "react";
import HomeMovies from "../components/HomeMovies/HomeMovies"
import {Link} from "react-router-dom"

class Home extends Component{
    constructor(props){
        super(props);
        this.state={
           peliculasPopulares:[],
           peliculasCartelera:[]
        }
        };

    render(){

    const popularesUrl = "https://api.themoviedb.org/3/movie/popular?api_key=1d1ffcbd926e19d7721125f17a8319dc";
    const carteleraUrl = "https://api.themoviedb.org/3/movie/now_playing?api_key=1d1ffcbd926e19d7721125f17a8319dc";
        return( 
            <div className="home">
                <h1>Lista de peliculas</h1>
                <h2>Peliculas más populares</h2>
                <HomeMovies url={popularesUrl}/>
                <button><Link to="/populares" className="link">Ver todas</Link></button>

                <h2>Peliculas cartelera</h2>
                <HomeMovies url={carteleraUrl}/>
                <button><Link to="/cartelera" className="link">Ver todas</Link></button>            
            </div>
    )};

}
  
  export default Home;