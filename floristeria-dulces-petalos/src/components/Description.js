import React from 'react';

function Description({ product }) {
  return (
    <div className="description">
      <h2>{product.name}</h2>
      <p>{product.binomialName}</p>
      <p>Precio: {product.price} €</p>
      <p>Riegos por semana: {product.wateringsPerWeek}</p>
      <p>Fertilizante recomendado: {product.fertilizerType === 'nitrogen' ? 'Nitrogenado' : 'Fosforado'}</p>
      <p>Altura: {product.heightInCm} cm</p>
    </div>
  );
}

export default Description;
