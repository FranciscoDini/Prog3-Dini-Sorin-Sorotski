import React, { Component } from "react";
import DetalleCard from "../components/DetalleCard/DetalleCard";
import "./pages.css"

class Detalle extends Component {
    constructor(props) {
      super(props);
      this.state = {movie: null, loading: true}
    }

    componentDidMount() {
        const {id}= this.props.match.params;
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=1d1ffcbd926e19d7721125f17a8319dc`)
        .then((response) => response.json())
        .then((data) => this.setState({movie:data, loading: false}))
        .catch((error) => {
            console.log("El error fue:", error);
          });
    }

    render() {
        const {movie, loading}= this.state
        if (loading) {
            return <h3>Cargando...</h3>;
          }
        //console.log(movie)
        return (
            <section>
            <DetalleCard movie={movie} />
            </section>
              )
            }
}

export default Detalle;