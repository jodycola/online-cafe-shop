import React from 'react';
import styled from 'styled-components';
import { locationsItems } from '../data'; 
import LocationItem from './LocationItem';
import { mobile } from '../responsive';

const Location = () => {

  const displayLocations = locationsItems.map((location) => {
    return <LocationItem key={location.id} location={location}/>
  })

  return (
    <Container>
      {displayLocations}
    </Container>
  )
}

export default Location

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}

`;

