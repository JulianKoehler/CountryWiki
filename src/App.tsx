import { useCallback, useContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/Global";
import Country from "./models/countryData";

import CountryDetails from "./pages/CountryDetails";
import Home from "./pages/Home";
import SharedContent from "./pages/SharedContent";
import { ThemeContext } from "./store/theme-context";
import useDebounce from "./hooks/useDebounce";

function App() {
  const { isDarkMode } = useContext(ThemeContext);
  const [query, setQuery] = useState<string>("");
  const [regionFilter, setRegionFilter] = useState<string | undefined>(undefined);
  const [allCountries, setAllCountries] = useState<Country[]>([]);
  const debounceValue = useDebounce(query);

  function search(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  function handleRegionFilterChange(region: string | undefined) {
    setRegionFilter(region);
  }

  const handleLoadAllCountries = useCallback((countries: Country[]) => {
    setAllCountries(countries);
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyles isDarkModeActive={isDarkMode} />
      <Routes>
        <Route
          path="/"
          element={<SharedContent />}>
          <Route
            index
            element={
              <Home
                query={query}
                debouncedQuery={debounceValue}
                setQuery={search}
                regionFilter={regionFilter}
                setRegionFilter={handleRegionFilterChange}
                allCountries={allCountries}
                setAllCountries={handleLoadAllCountries}
              />
            }
          />
          <Route
            path="countries/:countryCode"
            element={<CountryDetails />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
