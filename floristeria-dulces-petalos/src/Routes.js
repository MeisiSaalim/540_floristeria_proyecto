import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import ProductDetail from './views/ProductDetail';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
  );
};

const RoutesComponent = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default RoutesComponent;

