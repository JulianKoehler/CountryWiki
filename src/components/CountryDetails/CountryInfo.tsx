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
        <BorderCountries country={country} />
      </Info>
    </Container>
  );
};

export default CountryInfo;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10%;
  align-items: center;
  width: 100%;
  height: fit-content;
  max-height: 100%;
  margin-top: 5%;

  @media (max-width: 940px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 700px) {
    padding: var(--padding-mobile);
  }
`;

const Flag = styled.img`
  width: 560px;
  max-height: 401px;
  border-radius: 10px;
  box-shadow: 0px 0px 15px 10px rgba(0, 0, 0, 0.05);

  @media (max-width: 700px) {
    margin-top: 1.5rem;
    width: 97%;
  }
`;

const Info = styled.div`
  width: 40%;

  & h1 {
    font-size: 32px;
    margin-bottom: 1.5rem;
  }

  & div span {
    font-weight: 600;
    font-size: var(--country);
  }

  @media (max-width: 940px) {
    width: 100%;
    margin-top: 7%;
  }
  @media (max-width: 700px) {
    & h1 {
      font-size: 22px;
    }
  }
`;

const Details = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10%;

  @media (max-width: 700px) {
    flex-direction: column;
    font-size: 14px;
    line-height: 32px;
    gap: 2.5rem;

    & div p span {
      font-size: 14px;
    }
  }

  & .first-info-block,
  & .second-info-block {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
  }
`;
