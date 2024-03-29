import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CountryCard from "../components/CountryCard/CountryCard";
import Filter from "../components/Filter/Filter";
import Searchbar from "../components/Searchbar/Searchbar";
import useFetch from "../hooks/useFetch";
import Country from "../models/countryData";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

type HomeProps = {
  query: string;
  debouncedQuery: string;
  setQuery: (e: ChangeEvent<HTMLInputElement>) => void;
  regionFilter: string | undefined;
  setRegionFilter: (region: string | undefined) => void;
  allCountries: Country[];
  setAllCountries: (data: Country[]) => void;
};

const Home = ({
  query,
  debouncedQuery,
  setQuery,
  regionFilter,
  setRegionFilter,
  allCountries,
  setAllCountries,
}: HomeProps) => {
  const [loadedCountries, setLoadedCountries] = useState<Country[]>([]);

  const fetchAllCountries = useCallback(
    (data: []) => {
      data.sort((a: Country, b: Country) => b.population - a.population);

      setLoadedCountries(data);
      if (regionFilter === undefined) setAllCountries(data);
    },
    [regionFilter, setAllCountries]
  );

  const { isLoading, hasError, getData } = useFetch(fetchAllCountries);

  useEffect(() => {
    getData(regionFilter ? `region/${regionFilter}` : "all");
  }, [getData, regionFilter]);

  const filteredCountries = useMemo(() => {
    return debouncedQuery
      ? loadedCountries.filter((country: Country) => {
          return (
            country.name.common.toLowerCase().startsWith(debouncedQuery.toLowerCase()) ||
            country.translations.deu.common.toLowerCase().startsWith(debouncedQuery.toLowerCase()) ||
            country.translations.deu.official.toLowerCase().startsWith(debouncedQuery.toLowerCase()) ||
            country.altSpellings.some(spelling =>
              spelling.toLowerCase().startsWith(debouncedQuery.toLowerCase())
            )
          );
        })
      : loadedCountries;
  }, [debouncedQuery, loadedCountries]);

  const countryCards = filteredCountries.map((country: Country) => {
    return (
      <Link
        key={country.cca3}
        to={`/countries/${country.cca3}`}>
        <CountryCard
          flag={country.flags.png}
          name={country.name.common}
          population={country.population}
          region={country.region}
          capital={country.capital}
        />
      </Link>
    );
  });

  const regions = useMemo(() => {
    const regionOfEachCountry = query
      ? filteredCountries.map((country: Country) => country.region)
      : allCountries.map((country: Country) => country.region);
    return new Set<string>(regionOfEachCountry);
  }, [query, allCountries, filteredCountries]);

  function filterByRegionHandler(region: string) {
    region === "default" ? setRegionFilter(undefined) : setRegionFilter(region);
  }

  const isNoSearchResults = filteredCountries.length === 0;

  return (
    <>
      <FilterSection>
        <Searchbar
          value={query}
          searchForCountry={setQuery}
        />
        <Filter
          value={regionFilter}
          onFilter={filterByRegionHandler}
          regions={regions}
        />
      </FilterSection>
      {hasError && !isLoading ? (
        <ErrorScreen>
          Sorry, currently our service is not available, please try again at a later time.
        </ErrorScreen>
      ) : isLoading ? (
        <LoadingSpinner />
      ) : isNoSearchResults ? (
        <NoSearchResultsScreen>No results for your search.</NoSearchResultsScreen>
      ) : (
        <DataGrid>{countryCards}</DataGrid>
      )}
    </>
  );
};

export default Home;

const FilterSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  padding: 8rem 5rem 0;
  width: 100%;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
    padding: var(--padding-mobile);
    padding-top: 8rem;
  }
`;

const DataGrid = styled.main`
  padding: var(--homepage-padding);
  width: 100%;
  display: grid;
  margin-top: 3rem;
  margin-inline: auto;
  grid-template-columns: repeat(auto-fill, minmax(264px, 1fr));
  grid-row-gap: 4rem;
  grid-column-gap: 4rem;

  & a {
    text-decoration: none;
    color: inherit;
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 264px);
    padding: 0;
    padding-inline: auto;
    width: fit-content;
  }
`;

const ErrorScreen = styled.p`
  width: fit-content;
  margin: 10% auto;
  color: #df5f49;
  font-size: 18px;
  font-weight: 800;
`;

const NoSearchResultsScreen = styled.p`
  width: fit-content;
  margin: 10% auto;
  font-size: 18px;
  font-weight: 800;
`;
