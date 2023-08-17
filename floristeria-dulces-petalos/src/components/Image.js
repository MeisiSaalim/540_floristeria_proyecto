import React from 'react';
import './Image.css'; 
function Image({ src, alt }) {
  return (
    <div className="product-image">
      <img src={src} alt={alt} />
    </div>
  );
}

export default Image;

