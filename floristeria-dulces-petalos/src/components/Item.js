import React from 'react';
import { Link } from 'react-router-dom';

function Item({ product }) {
  return (
    <div className="item">
        <Link to={`/product/${product.id}`}>
            <img src={product.imgUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.binomialName}</p>
            <p>Precio: {product.price} €</p>
        </Link>
    </div>
  );
}

export default Item;
