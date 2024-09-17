import {Link} from "react-router-dom"

const Navbar=()=>{
    return(
        <>
            <ul className="nav">
            <li><Link to="/" className="link">Home</Link></li>
            <li><Link to="/cartelera" className="link">Cartelera</Link></li>
            <li><Link to="/populares" className="link">Populares</Link></li>
            <li><Link to="/favoritos" className="link">Favoritos</Link></li>

            </ul>
        
        
        </>
    )
}

export default Navbar