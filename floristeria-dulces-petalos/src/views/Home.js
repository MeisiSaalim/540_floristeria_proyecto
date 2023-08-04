import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Item from '../components/Item';
import { getProducts } from '../api'; // Importar la función para obtener los productos

function Home() {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    // Obtener los productos al cargar la vista
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase()) ||
    product.binomialName.toLowerCase().includes(searchText.toLowerCase())
  
  );

  return (
    <div>
      <Header />
      <div className="search-container">
        <Search onSearchChange={handleSearchChange} />
      </div>
      <div className="item-list">
        <div className="row">
          {filteredProducts.map((product, index) => (
            <React.Fragment key={product.id}>
              <Item product={product} />
              {(index + 1) % 4 === 0 && <div className="w-100"></div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;


