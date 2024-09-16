import {Component} from "react";
import HomeMovies from "../HomeMovies/HomeMovies"

class Home extends Component{
    constructor(props){
        super(props);
        this.state={
           peliculasPopulares:[],
           peliculasCartelera:[]
        }
        };
    
    
    componentDidMount() {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=1d1ffcbd926e19d7721125f17a8319dc")
        .then((response)=>response.json())
        .then((data)=>this.setState({peliculasPopulares:data.results.slice(0,5)}))
        .catch((error)=>{console.log("El error fue:")});
    
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=1d1ffcbd926e19d7721125f17a8319dc")
        .then((response)=>response.json())
        .then((data)=>this.setState({peliculasCartelera:data.results.slice(0,5)}))
        .catch((error)=>{console.log("El error fue:")})
    };

    render(){
      const {peliculasPopulares,peliculasCartelera}=this.state;
        return( 
            <div className="home">
                <h1>Lista de peliculas</h1>
                <h2>Peliculas más populares</h2>
                <HomeMovies peliculas={peliculasPopulares}/>
                <button><Link to="/populares" className="link">Ver todas</Link></button>

                <h2>Peliculas cartelera</h2>
                <HomeMovies peliculas={peliculasCartelera}/>
                <button><Link to="/cartelera" className="link">Ver todas</Link></button>            
            </div>
    )};

}
  
  export default Home;