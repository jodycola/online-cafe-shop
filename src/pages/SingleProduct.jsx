import React, { useState } from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { mobile } from '../responsive';

const SingleProduct = () => {
    const [amount, setAmount] = useState(0);
  return (
    <Container>
        <Announcement/>
        <Navbar/>
            <Wrapper>
                <ImageContainer>
                    <Image src="https://www.readyseteat.com/sites/g/files/qyyrlu501/files/uploadedImages/img_9106_51318.jpg"/>
                </ImageContainer>
                <InfoContainer>
                    <Title>Vanillia Cold Brew With Creamer</Title>
                    <Description>Sweet refreshing iced coffee made simply with Reddi Wip® Barista Nitro Creamer and cold brewed coffee.</Description>
                    <Price>$ 8.99</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                        <Filter>
                            <FilterTitle>Dairy</FilterTitle>
                            <FilterDairy>
                                <FilterDairyOption>Whole Milk</FilterDairyOption>
                                <FilterDairyOption>Skim Milk</FilterDairyOption>
                                <FilterDairyOption>Almond Milk</FilterDairyOption>
                                <FilterDairyOption>Oat Milk</FilterDairyOption>
                                <FilterDairyOption>Soy Milk</FilterDairyOption>
                            </FilterDairy>
                        </Filter>
                    </FilterContainer>
                    <Quantity>
                        <Amount>
                            <AiOutlineMinus style={{cursor: "pointer", marginTop: "10px"}}/>
                                <State>{amount}</State>
                            <AiOutlinePlus style={{cursor: "pointer", marginTop: "10px"}}/>
                        </Amount>
                        <Button> Add to cart </Button>
                    </Quantity>
                </InfoContainer>
            </Wrapper>
        <Newsletter/>
        <Footer/>

    </Container>
  )
}

export default SingleProduct

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection: "column" })}

`;

const ImageContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 80vh;
    object-fit: cover;
    ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ padding: "10px" })}

`;

const Title = styled.h1`
    font-weright: 200;
`;


const Description = styled.p`
    margin: 20px 0px;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 35px;
`;

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;

const FilterSize = styled.select`
    font-size: 20px;
    font-weight: 200;
    margin-left: 10px;
    padding: 5px;
`;

const FilterSizeOption = styled.option``;

const FilterDairy = styled.select`
    font-size: 20px;
    font-weight: 200;
    margin-left: 10px;
    padding: 5px;
`;

const FilterDairyOption = styled.option``;

const Quantity = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ width: "100%" })}
`;

const Amount = styled.div`
    display: flex;
    align-tiems: center;
    font-weight: 700;
    font-size: 20px;
`;

const State = styled.span`
    width: 40px;
    height: 40px;
    border-radius: 10px;
    border: 2px solid gray;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 10px;
`;

const Button = styled.div`
    padding: 15px;
    border: 2px solid gray;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
`;

