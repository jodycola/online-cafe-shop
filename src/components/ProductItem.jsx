import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faExpand } from '@fortawesome/free-solid-svg-icons'


const ProductItem = ({ product }) => {
  return (
    <Container>
        <Circle/>
        <Image src={product.img}/>
        <InfoContainer>
            <Icon>
                <FontAwesomeIcon icon={faCartShopping} size="xl"/>
            </Icon>
            <Icon>
                <FontAwesomeIcon icon={faExpand} size="xl"/>
            </Icon>
        </InfoContainer>
    </Container>
  )
}

export default ProductItem

const InfoContainer = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2 ease;
    cursor: pointer;
`;

const Container = styled.div`
    flex: 1 0 21%;
    min-width: 300px;
    margin: 5px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: lightgray;
    position: relative;
    &:hover ${InfoContainer} {
        opacity: 1;
    }
`;

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`;

const Image = styled.img`
    height: 75%;
    z-index: 2;
`;



const Icon = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
    transition: all 0.2s ease;
    &:hover {
        background-color: yellow;
        transform: scale(1.1);
    }
`;


