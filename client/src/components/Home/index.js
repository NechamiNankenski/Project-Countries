import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import DropDown from './DropDown';
import styled from 'styled-components';
import CountryCard from '../CountryCard';
import { AppContext } from '../../App';

export default function Home() {
  const {
    countries,
    setFilterName,
    filteredCountries,
    loading
  } = useContext(AppContext);

  if (loading) return <p>בטעינה...</p>
  if (!countries || countries.length == 0) return <p>! אין נתונים !</p>
  return (
    <Container>
      <h5 className="my-4">ניתן לחפש מדינה באמצעות הקלדת שם המדינה או באמצעות בחירה מהרשימה</h5>
      <SearchPanel>
        <DropDown
          countries={countries}
          setFilterName={setFilterName} />
        <input
          type="text"
          onChange={(e) => setFilterName(e.target.value)}
          placeholder='הקלד שם מדינה לחיפוש' />
      </SearchPanel>

      <Row>
        {filteredCountries && filteredCountries.length > 0 &&
          filteredCountries.map((country) => (
            <CountryCard key={country.name} country={country} />
          ))}
      </Row>
    </Container>
  );
}

const SearchPanel = styled.div`
display: flex;
gap:30px;
margin-bottom: 30px;
`;