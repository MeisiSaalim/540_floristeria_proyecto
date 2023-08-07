import React from 'react';
import './Description.css';


function Description({ product }) {
  return (
    <div className="product-description">
      <h2 className="product-title">{product.name}</h2>
      <p className="product-text">{product.binomialName}</p>
      <p className="product-text">Precio: {product.price} €</p>
      <p className="product-text">Riegos por semana: {product.wateringsPerWeek}</p>
      <p className="product-text">Fertilizante recomendado: {product.fertilizerType === 'nitrogen' ? 'Nitrogenado' : 'Fosforado'}</p>
      <p className="product-text">Altura: {product.heightInCm} cm</p>
    </div>
  );
}

export default Description;
