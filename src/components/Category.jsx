import React from 'react';
import styled from 'styled-components';
import { categoryItems } from '../data'; 
import CategoryItem from './CategoryItem';
import { mobile } from '../responsive';

const Category = () => {

  const displayCategories = categoryItems.map((item) => {
    return <CategoryItem key={item.id} item={item}/>
  })

  return (
    <Container>
      {displayCategories}
    </Container>
  )
}

export default Category

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

