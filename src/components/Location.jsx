import React from 'react';
import styled from 'styled-components';
import { locations } from '../data'; 
import LocationItem from './LocationItem';

const Location = () => {

  const displayLocations = locations.map((location) => {
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
`;

