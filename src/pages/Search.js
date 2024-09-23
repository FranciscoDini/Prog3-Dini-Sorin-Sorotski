import { Component } from "react";
import "./pages.css";
import SimpleGrid from "../components/SimpleGrid/SimpleGrid";

//import { PiDropSimple } from 'react-icons/pi';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${this.props.location.state.query}&api_key=33e10f642f640258287c658cad162391`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState(
          {
            movies: data.results,
          }
        );
        console.log(data.results);
      })
      .catch((error) => console.log(error));
  }

  render() {
    return <div>
    <h1>Resultados para: {this.props.location.state.query}</h1>
    <SimpleGrid peliculas={this.state.movies}/>
    </div>;
    

  }
}

export default Search;
