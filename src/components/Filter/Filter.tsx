import { useContext } from "react";
import styled from "styled-components";
import dropdownArrow from "../../assets/images/dropdownArrow.svg";
import dropdownArrowDarkMode from "../../assets/images/dropdownArrowDarkMode.svg";
import { ThemeContext } from "../../store/theme-context";

interface IFilterProps {
  value: string | undefined;
  regions: Set<string>;
  onFilter: (region: string) => void;
}

const Filter = ({ value, regions, onFilter }: IFilterProps) => {
  const regionsOptions = [...regions].map(region => (
    <option
      key={region}
      value={region}>
      {region}
    </option>
  ));

  const { isDarkMode } = useContext(ThemeContext);

  return (
    <DropDown
      value={value}
      onChange={e => onFilter(e.target.value)}
      isDarkModeActive={isDarkMode}>
      <option value="default">Filter by Region</option>
      {regionsOptions}
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
  background-image: ${props =>
    props.isDarkModeActive ? `url(${dropdownArrowDarkMode})` : `url(${dropdownArrow})`};
  background-repeat: no-repeat;
  background-position: 88%;
  border-radius: 5px;
  cursor: pointer;
  -webkit-appearance: initial;

  &:focus {
    outline: none;
  }

  &::-ms-expand {
    display: none;
  }
`;
