import { Component } from "react";
import Movie from "../Movie/Movie"


class HomeMovies extends Component{
    
constructor(props){
    super(props);
    this.state={
       peliculas:[]
    }
    };
    componentDidMount() {
        const { url } = this.props;
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            this.setState({ peliculas: data.results.slice(0, 5) });
          })
          .catch((error) => {
            console.log("El error fue:", error);
          });
      }
    
    render(){
        const {peliculas}= this.state;
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


