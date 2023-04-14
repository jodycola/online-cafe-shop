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

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: lightgray;
    position: relative;
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

const InfoContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: gray;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Icon = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;


