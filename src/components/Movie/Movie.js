import {Component } from "react";
import {Link} from "react-router-dom";

class Movie extends Component{
    constructor(props){
        super(props);
        this.state={
            MostrarDesc:false,
        }
    }
    handleMostrarDesc(){
        this.setState({
            MostrarDesc:!this.state.MostrarDesc
        })
    }


render (){
    const{id,title,overview,poster_path}=this.props.pelicula;
    
    return(
        <div className="movie-single">
            <h3>{title}</h3>

            <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt=""/>

            <p className="more"><Link to={`/detalle/id/${id}`} className="link">Ir a detalle</Link></p>
            <article className={this.state.MostrarDesc ? "show": "hide"}><p>{overview}</p></article>
            <p className="more" onClick={()=>this.handleMostrarDesc()}>{this.state.MostrarDesc ? "Ocultar Descripcion": "Ver descripicion"}</p>
        </div>
    );

};
}
export default Movie