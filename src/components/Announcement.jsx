import React from 'react';
import styled from "styled-components";

const Announcement = () => {
  return (
    <Container>
        15% OFF ALL ONLINE ORDERS!
    </Container>
  )
}

export default Announcement

const Container = styled.div`
    height: 30px;
    background-color: lightblue;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
`