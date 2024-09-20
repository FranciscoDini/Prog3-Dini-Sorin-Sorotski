import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'; // Asegúrate de crear y vincular este archivo CSS

const NotFound = () => {
  return (
    <div className="noEncontrado">
      <h1>¡404!</h1>
      <img 
        src={`${process.env.PUBLIC_URL}/images/foto404.webp`} 
        alt="Página no encontrada" 
      />
      <p>La página buscada no existe</p>
      <Link to="/">
        Home
      </Link>
    </div>
  );
};

export default NotFound;
