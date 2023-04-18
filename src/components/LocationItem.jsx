import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive'

const LocationItem = ({ location }) => {
  return (
    <Container>
        <ImageContainer>
            <Image src={location.img}/>
        </ImageContainer>
        <InfoContainer>
            <Title>{location.city}</Title>
            <Button className="bg-light-subtle border border-0 p-1 fw-bold">SHOP NOW</Button>
        </InfoContainer>
    </Container>
  )
}

export default LocationItem

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
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

