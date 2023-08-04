import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // Importar useParams para obtener el parámetro de la URL
import Header from '../components/Header';
import Image from '../components/Image';
import Description from '../components/Description';
import { getProductDetail } from '../api'; // Importar la función para obtener un producto

function ProductDetail() {
  const { id } = useParams(); // Obtener el parámetro de la URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Obtener el producto al cargar la vista
    const fetchProduct = async () => {
        const data = await getProductDetail(id);
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  return (
    <div>
      <Header />
      <div className="detail-view">
        <Link to="/" className="go-back-link">
          <button className="go-back-button">Volver</button>
        </Link>
        {product && (
          <div className="product-detail">
            <Image src={product.imgUrl} alt={product.name} />
            <Description product={product} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetail;
