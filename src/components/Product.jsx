import React from 'react';
import styled from 'styled-components';
import { menuItems } from '../data';
import ProductItem from './ProductItem';

const Product = ({ category, filter, sort }) => {

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