import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useFetch from "../../hooks/useFetch";
import Country from "../../models/countryData";
import { ThemeContext } from "../../store/theme-context";

const BorderCountries: React.FC<{ country: Country }> = ({ country }) => {
  const [borderCountries, setBorderCountries] = useState<Country[]>([]);
  const { isDarkMode } = useContext(ThemeContext);

  function fetchBorderCountries(data: []) {
    setBorderCountries(data);
  }

  const { getData } = useFetch(fetchBorderCountries);

  useEffect(() => {
    getData(`alpha?codes=${country.borders?.map(border => border.toLowerCase())}`);
  }, [country, getData]);

  return (
    <BorderCountryList>
      <span>Border Countries: </span>
      {country.borders
        ? country.borders.map(border => {
            return (
              <Link
                key={border}
                to={`/countries/${border}`}>
                <Button isDarkModeActive={isDarkMode}>
                  {borderCountries.find(country => country.cca3 === border)?.name.common}
                </Button>
              </Link>
            );
          })
        : "This country has no neighboring countries."}
    </BorderCountryList>
  );
};

export default BorderCountries;

const BorderCountryList = styled.div`
  margin-top: 2rem;

  @media (max-width: 700px) {
    & span {
      display: block;
      margin-bottom: 0.5rem;
      font-size: 16px;
    }
  }
`;

const Button = styled.button<{ isDarkModeActive: boolean }>`
  background-color: ${({ isDarkModeActive }) => (isDarkModeActive ? "var(--dark-blue)" : "var(--white)")};
  color: ${({ isDarkModeActive }) => (isDarkModeActive ? "var(--white)" : "var(--blackish-blue)")};
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.104931);
  border-radius: 2px;
  border: none;
  padding: 5px 27px 4px;
  cursor: pointer;
  margin: 0.5rem;
  transition: transform 0.25s;

  &:hover {
    transform: scale(0.95);
  }
`;
