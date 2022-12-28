import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import CountryDetails from "./pages/CountryDetails";
import Home from "./pages/Home";
import SharedContent from "./pages/SharedContent";
import { ThemeContext } from "./store/theme-context";

function App() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <AppContainer isDarkModeActive={isDarkMode}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<SharedContent />}>
            <Route
              index
              element={<Home />}
            />
            <Route
              path="countries/:countryCode"
              element={<CountryDetails />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div<{ isDarkModeActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: all 0.35s;
  background-color: ${props => (props.isDarkModeActive ? "var(--very-dark-blue)" : "var(--very-light-gray)")};
  color: ${props => (props.isDarkModeActive ? "var(--white)" : "var(--blackish-blue)")};
`;
