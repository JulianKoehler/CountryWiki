import React from "react";
import styled from "styled-components";
import Country from "../../models/countryData";
import BorderCountries from "./BorderCountries";
import FirstInfoBlock from "./FirstInfoBlock";
import SecondInfoBlock from "./SecondInfoBlock";

const CountryInfo: React.FC<{ country: Country }> = ({ country }) => {
  return (
    <Container>
      <Flag src={country.flags.svg} />
      <Info>
        <h1>{country.name.common}</h1>
        <Details>
          <FirstInfoBlock country={country} />
          <SecondInfoBlock country={country} />
        </Details>
        {country.borders && <BorderCountries country={country} />}
        {!country.borders && <p>This Country has no borders to other countries.</p>}
      </Info>
    </Container>
  );
};

export default CountryInfo;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: fit-content;
  max-height: 100%;
  margin-top: 5rem;
`;

const Flag = styled.img`
  width: 560px;
  border-radius: 10px;
  box-shadow: 0px 0px 15px 10px rgba(0, 0, 0, 0.05);
`;

const Info = styled.div`
  width: 40%;

  & h1 {
    font-size: 32px;
    margin-bottom: 1.5rem;
  }

  & div span {
    font-weight: 800;
    font-size: var(--country);
  }
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;

  & div p span {
    font-weight: 800;
    font-size: var(--country);
  }
`;
