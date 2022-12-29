import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import useFetch from "../hooks/useFetch";
import Country from "../models/countryData";
import { ThemeContext } from "../store/theme-context";
import CountryInfo from "../components/CountryDetails/CountryInfo";

const CountryDetails: React.FC = () => {
  const [country, setCountry] = useState<Country[]>([]);
  const { countryCode } = useParams();
  const { isDarkMode } = useContext(ThemeContext);
  const { getData } = useFetch(fetchCountryData);

  function fetchCountryData(data: Country[]) {
    setCountry(data);
  }
  console.log(country);

  useEffect(() => {
    getData(`alpha/${countryCode}`);
  }, [countryCode]);

  const arrowBack = (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g id="call-made">
        <path
          id="Shape"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.46447 4.10744L7.64298 5.28596L3.75389 9.17504L18.6031 9.17504L18.6031 10.825L3.75389 10.825L7.64298 14.714L6.46447 15.8926L0.57191 10L6.46447 4.10744Z"
          fill={isDarkMode ? "var(--white)" : "var(--blackish-blue)"}
        />
      </g>
    </svg>
  );

  return (
    <Main isDarkModeActive={isDarkMode}>
      <Link to="/">
        <Button isDarkModeActive={isDarkMode}>
          {arrowBack}
          <span> Back</span>
        </Button>
      </Link>
      {country.length > 0 && <CountryInfo country={country[0]} />}
    </Main>
  );
};

export default CountryDetails;

const Main = styled.main<{ isDarkModeActive: boolean }>`
  width: 100%;
  height: 100%;
  background-color: ${({ isDarkModeActive }) =>
    isDarkModeActive ? "var(--very-dark-blue)" : "var(--white)"};
  padding: 12rem 6rem 0;

  & a {
    text-decoration: none;
    color: inherit;
  }
`;

const Button = styled.button<{ isDarkModeActive: boolean }>`
  border: none;
  padding: 0.5rem 2rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: ${({ isDarkModeActive }) => (isDarkModeActive ? "var(--white)" : "var(--blackish-blue)")};
  background-color: ${({ isDarkModeActive }) => (isDarkModeActive ? "var(--dark-blue)" : "var(--white)")};
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;
