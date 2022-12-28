import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../store/theme-context";
import searchIcon from "../../assets/images/search.svg";

const Searchbar: React.FC<{
  value: string;
  searchForCountry: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = props => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <SearchBar
      value={props.value}
      type="search"
      placeholder="Search for a country..."
      onChange={props.searchForCountry}
      isDarkModeActive={isDarkMode}
    />
  );
};

export default Searchbar;

const SearchBar = styled.input<{ isDarkModeActive: boolean }>`
  border: none;
  padding: 1.5rem 1.5rem 1.5rem 5rem;
  width: 480px;
  font-family: inherit;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: 5px;
  background-color: ${props => (props.isDarkModeActive ? "var(--dark-blue)" : "var(--white)")};
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-position: 8% 50%;
  color: inherit;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${props => (props.isDarkModeActive ? "var(--white)" : "var(--blackish-blue)")};
  }
`;