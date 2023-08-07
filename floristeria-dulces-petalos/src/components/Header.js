import React from 'react';
import './Header.css'; // Importa el archivo de estilos CSS que proporcioné anteriormente

function Header() {
  return (
    <header className="header">
      <div className="logo">Floristería Dulces Pétalos</div>
      <nav className="nav">
        <a href="/">Inicio</a> / <a href="/productos">Productos</a>
      </nav>
    </header>
  );
}

export default Header;
