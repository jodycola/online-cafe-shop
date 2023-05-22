import React from 'react';
import styled from 'styled-components';
import { categoryItems } from '../data'; 
import CategoryItem from './CategoryItem';
import { mobile } from '../responsive';

const Category = () => {

  const displayCategories = categoryItems.map((category) => {
    return <CategoryItem key={category.id} category={category}/>
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

