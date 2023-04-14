import React from 'react';
import styled from 'styled-components';

const SliderItem = ({ slide }) =>{
  return (
    <Slide>
        <ImageContainer>
            <Image src={slide.img} height="750px" width="500px"/>
        </ImageContainer>
        <InfoContainer>
            <Title>{slide.title}</Title>
            <Description>{slide.description}</Description>
            <Button>Shop Now</Button>
        </InfoContainer>
    </Slide>
  )
}

export default SliderItem

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ImageContainer = styled.div`
    height: 100%
    flex: 1;
`

const Image = styled.img`
    height: 80%;
    width: 80%;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`

const Title = styled.h1`
    font-size: 70px;
`

const Description = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`