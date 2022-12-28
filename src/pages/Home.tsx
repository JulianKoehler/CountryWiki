import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import CountryCard from "../components/CountryCard/CountryCard";
import Filter from "../components/Filter/Filter";
import Searchbar from "../components/Searchbar/Searchbar";
import useFetch from "../hooks/useFetch";
import Country from "../models/countryData";

const Home: React.FC = () => {
  const [countries, setCountries] = useState<[]>([]);
  const [query, setQuery] = useState<string>("");
  const [regionFilter, setRegionFilter] = useState<string | undefined>("");

  const search = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const fetchAllCountries = useCallback((data: []) => {
    setCountries(data);
  }, []);

  const filteredCountries = query
    ? countries.filter((country: Country) => {
        return (
          country.name.common.toLowerCase().startsWith(query.toLocaleLowerCase()) ||
          country.translations.deu.common.toLowerCase().startsWith(query.toLocaleLowerCase()) ||
          country.translations.deu.official.toLowerCase().startsWith(query.toLocaleLowerCase()) ||
          country.altSpellings.some(spelling => spelling.toLowerCase().startsWith(query.toLocaleLowerCase()))
        );
      })
    : countries;

  const { isLoading, getData } = useFetch(fetchAllCountries);

  useEffect(() => {
    getData(regionFilter ? `region/${regionFilter}` : "all");
  }, [getData, regionFilter]);

  const countryCards = filteredCountries.map((country: Country) => {
    return (
      <CountryCard
        key={country.cca3}
        flag={country.flags.png}
        name={country.name.common}
        population={country.population}
        region={country.region}
        capital={country.capital}
      />
    );
  });

  const getAllRegions = () => {
    const regionOfEachCountry = query
      ? filteredCountries.map((country: Country) => country.region)
      : countries.map((country: Country) => country.region);
    return new Set<string>(regionOfEachCountry);
  };
  const regions = getAllRegions();

  const filterByRegionHandler = (region: string) => {
    region === "default" ? setRegionFilter(undefined) : setRegionFilter(region);
  };

  return (
    <React.Fragment>
      <FilterSection>
        <Searchbar
          value={query}
          searchForCountry={search}
        />
        <Filter
          onFilter={filterByRegionHandler}
          regions={regions}
        />
      </FilterSection>
      <Main>{isLoading ? <LoadingScreen>Loading...</LoadingScreen> : countryCards}</Main>
    </React.Fragment>
  );
};

export default Home;

const Main = styled.main`
  padding: 3.5rem 0;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 2rem;
  grid-column-gap: 4rem;

  @media (max-width: 2040px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: 1705px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1380px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1060px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const FilterSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8rem 5rem 0;
  width: 100%;
`;

const LoadingScreen = styled.p`
  font-size: 32px;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
`;
