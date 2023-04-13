import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
    height: 60px;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
const Language = styled.div`
    cursor: pointer;
`;
const Search = styled.div`
    border: .5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.div`
`



const Center = styled.div`
    flex: 1;
`;



const Right = styled.div`
    flex: 1;
`;

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <Search>
                    input
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Search>
            </Left>
            <Center>Center</Center>
            <Right>Right</Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar