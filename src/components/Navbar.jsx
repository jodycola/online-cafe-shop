import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { mobile } from '../responsive';

const Navbar = () => {
    const [count, setCount] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");

    const submitSearch = () => {
        console.log(searchTerm)
        setSearchTerm("")
    }

  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <Search>
                    <Input 
                        type="text"
                        className="search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} 
                    />
                    <FontAwesomeIcon 
                        icon={faMagnifyingGlass}
                        value="Submit" 
                        onClick={submitSearch}
                        style={{paddingLeft: "10px"}}
                    />
                </Search>
            </Left>
            <Center>
                <Logo>.Noir</Logo>
            </Center>
            <Right>
            <Cart>
                <button type="button" className="btn btn-light position-relative" onClick={() => setCount(count + 1)}>
                    <FontAwesomeIcon icon={faCartShopping} size="xl"/>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
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

const Container = styled.div`
    position: sticky; top: 0;
    height: 60px;
    padding-bottom: 75px;
    border-bottom: 3px solid darkgray;
    z-index: 1;
    background-color: black;
    ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}

`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
const Language = styled.div`
    cursor: pointer;
    color: white;
    ${mobile({ display: "none" })}

`;

const Input = styled.input`
    border: none;
    color: white;
    &:focus {
        outline: none !important;
        box-shadow: 0 0 10px lightgray;
    }
    ${mobile({ width: "50px" })}
`;

const Search = styled.div`
    color: white;
    border: .5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.div`
    color: white;
    font-weight: bold;
    font-size: 36px;
    ${mobile({ fontSize: "24px" })}

`

const Right = styled.div`
    flex: 1;
    text-align: right;
    padding-right: 25px;
    ${mobile({ justifyContent: "center" })}
`;

const Cart = styled.div`
    cursor: pointer;
    ${mobile({ fontSize: "12px" })}

`