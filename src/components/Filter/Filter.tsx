import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../store/theme-context";

const Filter: React.FC<{ onFilter: (region: string) => void; regions: Set<string> }> = props => {
  const regions = [...props.regions].map(region => (
    <option
      key={region}
      value={region}>
      {region}
    </option>
  ));

  const { isDarkMode } = useContext(ThemeContext);

  return (
    <DropDown
      onChange={e => props.onFilter(e.target.value)}
      isDarkModeActive={isDarkMode}>
      <option value="default">Filter by Region</option>
      {regions}
    </DropDown>
  );
};

export default Filter;

const DropDown = styled.select<{ isDarkModeActive: boolean }>`
  border: none;
  padding: 1rem 3rem 1rem 1rem;
  border: none;
  font-family: inherit;
  color: ${props => (props.isDarkModeActive ? "var(--white)" : "var(--blackish-blue)")};
  background-color: ${props => (props.isDarkModeActive ? "var(--dark-blue)" : "var(--white)")};
  border-radius: 5px;

  &:focus {
    outline: none;
  }

  &::-ms-expand {
    display: none;
  }
`;
