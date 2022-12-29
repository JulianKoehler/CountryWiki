import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../store/theme-context";

const Header: React.FC = () => {
  const { isDarkMode, changeThemeHandler } = useContext(ThemeContext);

  return (
    <HeaderContainer darkMode={isDarkMode}>
      <h1>Where in the world?</h1>
      <DarkModeBtn
        darkMode={isDarkMode}
        onClick={changeThemeHandler}>
        <Icon className="fa-solid fa-moon fa-lg" />
        Dark Mode
      </DarkModeBtn>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header<{ darkMode: boolean }>`
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--homepage-padding);
  background-color: ${props => (props.darkMode ? "var(--dark-blue)" : "var(--white)")};
  color: ${props => (props.darkMode ? "var(--white)" : "var(--blackish-blue)")};
  z-index: 10;

  @media (max-width: 700px) {
    padding: var(--padding-mobile);
    font-size: 18px;
  }

  @media (max-width: 400px) {
    & h1 {
      font-size: 14px;
    }
  }
`;

const DarkModeBtn = styled.button<{ darkMode: boolean }>`
  background-color: var(--white);
  color: ${props => (props.darkMode ? "var(--white)" : "var(--blackish-blue)")};
  font-family: inherit;
  font-weight: 800;
  cursor: pointer;
  padding: 10px 15px;
  border: unset;
  border-radius: 10px;
  z-index: 1;
  background-color: ${props => (props.darkMode ? "var(--dark-blue)" : "var(--white)")};
  position: relative;
  font-weight: 1000;
  transition: all 400ms;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    border-radius: 10px;
    background-color: ${props => (props.darkMode ? "var(--white)" : "var(--dark-blue)")};
    z-index: -1;
    transition: all 250ms;
  }

  &:hover {
    color: ${props => (props.darkMode ? "var(--blackish-blue)" : "var(--white)")};
  }

  &:hover::before {
    width: 100%;
  }
`;

const Icon = styled.i`
  margin-right: 0.5rem;
`;
