import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../store/theme-context";
import searchIcon from "../../assets/images/search.svg";

interface ISearchbar extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  searchForCountry: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Searchbar: React.FC<ISearchbar> = props => {
  const { value, searchForCountry, ...restProps } = props;
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <SearchBar
      value={props.value}
      type="search"
      placeholder="Search for a country..."
      onChange={props.searchForCountry}
      isDarkModeActive={isDarkMode}
      {...restProps}
    />
  );
};

export default Searchbar;

const SearchBar = styled.input<{ isDarkModeActive: boolean }>`
  border: none;
  padding: 1rem 1.5rem 1rem 5rem;
  width: 480px;
  max-width: 100%;
  font-family: inherit;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: 5px;
  background-color: ${props => (props.isDarkModeActive ? "var(--dark-blue)" : "var(--white)")};
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-position: 8% 50%;
  color: inherit;

  -webkit-appearance: none;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${props => (props.isDarkModeActive ? "var(--white)" : "var(--blackish-blue)")};
  }

  @media (max-width: 700px) {
    padding-left: 4rem;
  }
`;
