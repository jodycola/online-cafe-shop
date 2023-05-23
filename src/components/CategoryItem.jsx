import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive'
import { Link } from "react-router-dom";

const CategoryItem = ({ item }) => {
  return (
    <Container>
        <Link to={`/products/${item.category}`}>
        <ImageContainer>
            <Image src={item.img}/>
        </ImageContainer>
        <InfoContainer>
            <Title>{item.title}</Title>
            <Button className="bg-light-subtle border border-0 p-1 fw-bold">SHOP NOW</Button>
        </InfoContainer>
        </Link>
    </Container>
  )
}

export default CategoryItem

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`;

const Image = styled.img`
    width: 100%;
    height: 400px;
    object-fit: cover;
    ${mobile({ height: "30vh" })}
`;

const ImageContainer = styled.div`
`;

const InfoContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justifty-content: center
`;

const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    cursor: pointer;
`;

