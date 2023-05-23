import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Product from '../components/Product';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { mobile } from '../responsive';

const ProductList = () => {
    const location = useLocation();
    const category = location.pathname.split("/")[2];

    const [filter, setFilter] = useState("");
    const [sort, setSort] = useState("");


    const handleFilter = (e) => {
        setFilter( e.target.value);
    };

  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Title>Beverages</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products</FilterText>
                <Select name="types" onChange={handleFilter}>
                    <Option disabled>
                        Types
                    </Option>
                    <Option>hot</Option>
                    <Option>cold</Option>
                    <Option>smoothie</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products</FilterText>
                <Select onChange={(e) => setSort(e.target.value)}>
                    <Option value="rating">Rating</Option>
                    <Option value="asc">Price (asc)</Option>
                    <Option value="desc">Price (desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Product 
            category={category}
            filter={filter}
            sort={sort}
        />
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList

const Container = styled.div``;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
    ${mobile({ margin: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: "0px" })}
`

const Select = styled.select`
    padding: 5px;
    margin-right: 10px;
    ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option``;

