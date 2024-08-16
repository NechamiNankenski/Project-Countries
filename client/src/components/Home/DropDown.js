import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import styled from 'styled-components';

export default function DropDown({ countries }) {
  return (
    <Dropdown>
      <DropdownToggle id="dropdown-basic">בחר מדינה</DropdownToggle>

      <DropdownMenu>
        {countries.map((country) => (
          <Link to={`/country/${country.name}`} key={country.name} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Label key={country.name}>
              {country.name}
            </Label>
          </Link>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
const DropdownToggle = styled(Dropdown.Toggle)`
 width: 200px;
  `;

const DropdownMenu = styled(Dropdown.Menu)`
 overflow: scroll;
 height: 300px;
  `;

const Label = styled.div`
padding:1px 4px;
`;
