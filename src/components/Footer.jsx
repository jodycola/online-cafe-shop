import React from 'react';
import styled from 'styled-components';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <Container>
        <Left></Left>
            <Logo>.Noir</Logo>
            <Description>

            </Description>
            <SocialContainer>
                <SocialIcon>
                    <AiFillLinkedin/>
                </SocialIcon>
                <SocialIcon>
                    <AiFillGithub/>
                </SocialIcon>
            </SocialContainer>
        <Center></Center>
        <Right></Right>
    </Container>
  )
}

export default Footer

const Container = styled.div`
    display: flex;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1``;

const Description = styled.p``;

const SocialContainer = styled.div``;

const SocialIcon = styled.div``;


const Center = styled.div`
    flex: 1;
`;

const Right = styled.div`
    flex: 1;
`;
