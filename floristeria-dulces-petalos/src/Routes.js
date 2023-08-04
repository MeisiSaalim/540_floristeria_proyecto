// Routes.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './views/Home';
import ProductDetail from './views/ProductDetail';

const Routes = () => {
  return (
    <Router>
      
        <Route exact path="/" component={Home} />
        <Route path="/product/:id" component={ProductDetail} />
        
    </Router>
  );
};

export default Routes;
