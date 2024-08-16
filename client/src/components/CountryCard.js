import React from 'react';
import { Card, Col } from 'react-bootstrap';
import styled from 'styled-components';

export default function CountryCard({ country, isShowCurrencies = false }) {
  return (
    <Col className='p-0 m-2' md={3} dir="ltr">
      <StyledCard>
        <Card.Body>
          <img src={country.flag} width={30} />
          <Card.Title>{country.name}</Card.Title>
          <Card.Text>{country.capital}</Card.Text>
          {isShowCurrencies && country.currencies.map((currency =>
            <Card.Text>{`${currency?.symbol} - ${currency?.name}, ${currency?.code}`}</Card.Text>))}
        </Card.Body>
      </StyledCard>
    </Col>
  );
}

const StyledCard = styled(Card)`
background-color: #ededed;
border: 2px solid #007fff;
`;
