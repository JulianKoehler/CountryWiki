import React, { useContext } from "react";
import styled from "styled-components";
import CountryCardProps from "../../models/countryCardProps";
import { ThemeContext } from "../../store/theme-context";

const CountryCard: React.FC<CountryCardProps> = props => {
  const { isDarkMode } = useContext(ThemeContext);

  function formatNumber(value: number) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <Card isDarkModeActive={isDarkMode}>
      <Flag
        src={props.flag}
        alt="flag"
      />
      <QuickFacts>
        <Name>{props.name}</Name>
        <Fact>
          <span>Capital:</span> {props.capital}
        </Fact>
        <Fact>
          <span>Population:</span> {formatNumber(props.population)}
        </Fact>
        <Fact>
          <span>Region:</span> {props.region}
        </Fact>
      </QuickFacts>
    </Card>
  );
};

export default CountryCard;

const Card = styled.div<{ isDarkModeActive: boolean }>`
  max-width: 264px;
  height: 336px;
  border-radius: 5px;
  background-color: ${props => (props.isDarkModeActive ? "var(--dark-blue)" : "var(--white)")};
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.0294384);
  transition: transform 1s;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const Flag = styled.img`
  width: 264px;
  height: 160px;
  border-radius: 5px 5px 0 0;
`;

const Name = styled.h2`
  margin-bottom: 1rem;
`;

const Fact = styled.p`
  font-size: var(--homepage);
  margin: 0.3rem 0;

  & span {
    font-weight: 800;
  }
`;

const QuickFacts = styled.div`
  padding: 1rem 1.5rem;
`;
