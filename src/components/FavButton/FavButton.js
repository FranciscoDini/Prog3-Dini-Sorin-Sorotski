import React, { Component } from 'react';
import Favoritos from '../../pages/Favoritos';
import { FaHeart, FaRegHeart } from "react-icons/fa"; 

class FavButton extends Component {
  constructor(props) {
    super(props);
    this.state=
    {esFavorito:false};
  }
  componentDidMount(){const storage=localStorage.getItem("favoritos");
    if (storage!==null){
        const parsedStorage=JSON.parse(storage)
        const estaFav=parsedStorage.includes(this.props.movie.id)
        if (estaFav){
            this.setState({
                esFavorito:true
            }
            )
        } 
    }
  }

  addFav(){
    const storage=localStorage.getItem("favoritos");
    if (storage !== null){
        const parsedStorage=JSON.parse(storage)
        parsedStorage.push(this.props.movie.id);
        const stringStorage=JSON.stringify(parsedStorage)
        localStorage.setItem("favoritos",stringStorage)
    }else{
        const primerFav=[this.props.movie.id]
        const stringStorage=JSON.stringify (primerFav)
        localStorage.setItem("favoritos", stringStorage)

    }

    this.setState({
        esFavorito: true
    })
  }

  removeFav(){
    const storage= localStorage.getItem('favoritos')
    const parsedStorage=JSON.parse(storage)
    const resFav = parsedStorage.filter(id=> id !== this.props.movie.id)
    const stringStorage =JSON.stringify(resFav)
    localStorage.setItem("favoritos", stringStorage)
    this.setState({
        esFavorito: false
    })
  }

  render(){
    return(
    <article>
        <div>
            
        </div>
        <button
            onClick={()=> this.state.esFavorito ? this.removeFav(): this.addFav()}
            >
            {this.state.esFavorito ? ( 
                <FaHeart size={20} color="red" />
            ) : (
                <FaRegHeart size={20} /> 
            )
            }
        </button>
    </article>
    )
  }



}

export default FavButton
