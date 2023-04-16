import React from 'react';
import styled from 'styled-components';
import { AiFillLinkedin, AiFillGithub, AiFillPhone, AiFillMail } from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>.Noir</Logo>
            <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Description>
            <SocialContainer>
                <SocialIcon bgColor="#0072b1">
                    <AiFillLinkedin/>
                </SocialIcon>
                <SocialIcon bgColor="#6e5494">
                    <AiFillGithub/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Home</ListItem>
                <ListItem>Home</ListItem>
                <ListItem>Home</ListItem>
                <ListItem>Home</ListItem>
                <ListItem>Home</ListItem>
                <ListItem>Home</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem> <FaMapMarkerAlt style={{marginRight: "10px"}}/> 2302 Taylor Street, New York, NY, 10013 </ContactItem>
            <ContactItem> <AiFillPhone style={{marginRight: "10px"}}/> 914-598-7030 </ContactItem>
            <ContactItem> <AiFillMail style={{marginRight: "10px"}}/> contact@noir.com </ContactItem>
            <Payment src="https://dor.georgia.gov/sites/dor.georgia.gov/files/styles/flexheight/public/ccard-logos-set.png?itok=uWshcsAR"/>
        </Right>
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

const Logo = styled.h1`

`;

const Description = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    font-size: 24px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: ${props => props.bgColor};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;


const Center = styled.div`
    flex: 1;
    padding: 20px;
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    margin-top: 10px;
    width: 300px;
`;