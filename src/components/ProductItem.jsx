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
                <FontAwesomeIcon icon={faCartShopping} size="2xl"/>
            </Icon>
            <Icon>
                <FontAwesomeIcon icon={faExpand} size="2xl" />
            </Icon>
        </InfoContainer>
    </Container>
  )
}

export default ProductItem

const Container = styled.div``;
const Circle = styled.div``;
const Image = styled.img``;
const InfoContainer = styled.div``;
const Icon = styled.div``;


