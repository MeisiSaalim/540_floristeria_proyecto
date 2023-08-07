import React from 'react';
import './Image.css'; // Asegúrate de ajustar la importación según la ubicación de tus archivos

function Image({ src, alt }) {
  return (
    <div className="product-image">
      <img src={src} alt={alt} />
    </div>
  );
}

export default Image;

