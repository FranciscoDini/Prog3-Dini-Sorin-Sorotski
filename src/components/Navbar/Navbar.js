import {Link} from "react-router-dom"
import './Navbar.css';
import SearchForm from "../SearchForm/SearchForm";


const Navbar=()=>{
    return(
        <>
            <ul className="nav">
            <li><img src="/images/logo.webp" alt="SSD Movies" /></li>
            <li><Link to="/" className="link">Home</Link></li>
            <li><Link to="/cartelera" className="link">Cartelera</Link></li>
            <li><Link to="/populares" className="link">Populares</Link></li>
            <li><Link to="/favoritos" className="link">Favoritos</Link></li>
            </ul>
        
        
        </>
    )
}

export default Navbar