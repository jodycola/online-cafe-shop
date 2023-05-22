import React from 'react';
import Home from "./pages/Home";
import ProductList from './pages/ProductList';
import SingleProduct from './pages/SingleProduct';
import ShoppingCart from './pages/ShoppingCart';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products/:category" element={<ProductList />}/>
        <Route path="/product/:id" element={<SingleProduct />}/>
        <Route path="/cart" element={<ShoppingCart />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App