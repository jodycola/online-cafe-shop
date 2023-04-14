import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import SliderItem from './SliderItem';
import { sliderItems } from '../data';

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const slideDisplay = sliderItems.map((slide) => {
        return <SliderItem key={slide.id} slide={slide}/>
    })
    
    const handleClick = (direction) => {
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
        } else {
            setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
        }
    }

  return (
    <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
            <FontAwesomeIcon icon={faArrowLeft} />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {slideDisplay}
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
            <FontAwesomeIcon icon={faArrowRight} />
        </Arrow>
    </Container>
  )
}

export default Slider

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: lightgray;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    bottom: 0;
    margin: auto;
    cursor: pointer;
    opacity: 0.3;
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1s ease;
    transform: translate(${(props) => props.slideIndex * -100}vw)
`
