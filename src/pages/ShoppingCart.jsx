import React from 'react'
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const ShoppingCart = () => {
  return (
    <Container>
      <Announcement/>
      <Navbar/>
        <Wrapper>
          <Title> YOUR CART </Title>
          <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
              <TopText>Shopping Cart(2)</TopText>
            </TopTexts>
            <TopButton>CHECKOUT NOW</TopButton>
          </Top>
          <Bottom>
            <Info>
              <Product>
                <ProductDetail>
                  <Image src="https://www.converse.com/dw/image/v2/BJJF_PRD/on/demandware.static/-/Sites-cnv-master-catalog-we/default/dw4c98a51e/images/e_08/132169C_E_08X1.jpg"/>
                  <Details>
                    <ProductName><b> Product:</b> Jessie Thunder Shoes</ProductName>
                    <ProductId><b> ID:</b> 123213123213</ProductId>
                    <ProductSize><b> Product:</b> Jessie Thunder Shoes</ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <AiOutlineMinus style={{cursor: "pointer", marginTop: "15px"}}/>
                    <ProductAmount>2</ProductAmount>
                    <AiOutlinePlus style={{cursor: "pointer", marginTop: "15px"}}/>
                  </ProductAmountContainer>
                  <ProductPrice>$ 30</ProductPrice>
                </PriceDetail>
              </Product>
              <hr/>
            </Info>
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummartItemText>Subtotal</SummartItemText>
                <SummaryItemPrice>$ 80</SummaryItemPrice>
              </SummaryItem>
              <SummaryButton>CHECKOUT</SummaryButton>
            </Summary>
          </Bottom>
        </Wrapper>
      <Footer/>
    </Container>
  )
}

export default ShoppingCart

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.div`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  displaY: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: point;
  border: 
`;

const TopTexts = styled.div``;

const TopText = styled.div`
  text-decoration: underline;
  cursor: pointer;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;

`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-cotnet: space-around;
`;

const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductSize = styled.span``;

const PriceDetail = styled.span`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-center: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Summary = styled.div`
  flex: 1;
  height: 50vh;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const SummartItemText = styled.span``;
const SummaryItemPrice = styled.span``;

const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 200;
`;




