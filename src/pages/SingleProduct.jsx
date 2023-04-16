import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { TbMilk } from 'react-icons/tb';
import { CiWheat, CiCoffeeBean } from 'react-icons/ci';
import { GiAlmond } from 'react-icons/gi';

const SingleProduct = () => {
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
                            
                            <FilterSize size="8 oz."></FilterSize>
                            <FilterSize size="12 oz."></FilterSize>
                            <FilterSize size="16 oz."></FilterSize>
                            <FilterSize size="24 oz."></FilterSize>
                        </Filter>
                        <Filter>
                            <FilterTitle>Dairy</FilterTitle>
                            <FilterDairy>
                                <Circle>
                                    <TbMilk/>
                                </Circle>
                            </FilterDairy>
                            <FilterDairy>
                                <Circle>
                                    <GiAlmond/>
                                </Circle>
                            </FilterDairy>
                            <FilterDairy>
                                <Circle>
                                    <CiWheat/>
                                </Circle>
                            </FilterDairy>
                            <FilterDairy>
                                <Circle>
                                    <CiCoffeeBean/>
                                </Circle>
                            </FilterDairy>
                        </Filter>
                    </FilterContainer>
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
`;

const ImageContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 80vh;
    object-fit: cover;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
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
    width: 20px;
    height: 20px;
`;

const FilterDairy = styled.div`
    font-size: 50px;
    width: 20px;
    height: 20px;
`;
    
const Circle = styled.div`
    border-radius: 50%;
    width: 20px;
    height: 20px;
`



