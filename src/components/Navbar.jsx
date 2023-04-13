import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
    height: 60px;
    padding-bottom: 75px;
    border-bottom: 3px solid darkgray;
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

const Input = styled.input`
    border: none;
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.div`
    font-weight: bold;
    font-size: 36px;
`

const Right = styled.div`
    flex: 1;
    text-align: right;
    padding-right: 25px;
`;

const Cart = styled.div`
    cursor: pointer;
`

const Navbar = () => {
    const [count, setCount] = useState(0);

  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <Search>
                    <Input/>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Search>
            </Left>
            <Center>
                <Logo>.Noir</Logo>
            </Center>
            <Right>
            <Cart>
                <button type="button" class="btn btn-light position-relative" onClick={() => setCount(count + 1)}>
                    <FontAwesomeIcon icon={faCartShopping} size="2xl"/>
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {count}
                    </span>
                </button>
            </Cart>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar