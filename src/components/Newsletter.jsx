import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Stay up to date with our newsletter</Description>
        <InputContainer>
            <Input placeholder="Your Email"/>
            <Button>
                <FontAwesomeIcon icon={faPaperPlane} />
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter

const Container = styled.div`
    height: 60vh;
    backhround-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Title = styled.h1`
    font-size: 70px;
    margin:bottom- 20px;
`;

const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`;

const InputContainer = styled.div`
    width: 50%;
    height: 48px;
    backhground-color:white;
    display: flex;
    justify-content: center;
    border: 1px solid lightgray;
`;

const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`;

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: gold;
    color: black;
`;


