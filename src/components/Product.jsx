import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { menuItems } from '../data';
import ProductItem from './ProductItem';
import axios from 'axios';

const Product = ({ category, filter, sort }) => {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/products")
        console.log(res)
      } catch(err) {}
    };
    getProducts()
  }, [category])

    const displayMenu = menuItems.map((product) => {
        return <ProductItem key={product.id} product={product}/>
    })

  return (
    <Container>
        {displayMenu}
    </Container>
  )
}

export default Product

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between
`;