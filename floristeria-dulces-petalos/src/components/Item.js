import React from 'react';

function Item({ product }) {
  return (
    <div className="item">
      <img src={product.imgUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.binomialName}</p>
      <p>Precio: {product.price} €</p>
    </div>
  );
}

export default Item;
