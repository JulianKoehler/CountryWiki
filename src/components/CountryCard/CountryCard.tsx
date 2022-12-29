import React, { useContext, useMemo } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../store/theme-context";
import formatNumber from "../../utils/formatNumber";

interface ICountryCardProps {
  children?: React.ReactNode;
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string[];
}

const CountryCard = (props: ICountryCardProps) => {
  const { isDarkMode } = useContext(ThemeContext);

  const formattedPopulation = useMemo(() => {
    return formatNumber(props.population);
  }, [props.population]);

  return (
    <Card isDarkModeActive={isDarkMode}>
      <Flag
        src={props.flag}
        alt={`Flag of ${props.name}`}
      />
      <QuickFacts>
        <Name>{props.name}</Name>
        <Fact>
          <span>Capital:</span> {props.capital}
        </Fact>
        <Fact>
          <span>Population:</span> {formattedPopulation}
        </Fact>
        <Fact>
          <span>Region:</span> {props.region}
        </Fact>
      </QuickFacts>
    </Card>
  );
};

export default React.memo(CountryCard);

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
