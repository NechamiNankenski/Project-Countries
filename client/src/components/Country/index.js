import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import CountryCard from '../CountryCard';
import { AppContext } from '../../App';

export default function Country() {
    const { countryName } = useParams();
    const { countries, handleOnBack } = useContext(AppContext);
    const country = countries.find(x => x.name === countryName);
    return (
        <Container>
            <Link onClick={() => handleOnBack()} to={`/`} >חזור</Link>
            <h3>פרטי מדינה</h3>
            <CountryCard country={country} isShowCurrencies />
        </Container>
    );
}
