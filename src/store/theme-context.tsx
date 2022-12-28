import React, { useState } from "react";
import Theme from "../models/theme";

export const ThemeContext = React.createContext<Theme>({
  isDarkMode: false,
  changeThemeHandler: () => {},
});

const ThemeProvider: React.FC<{ children: React.ReactNode }> = props => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const changeThemeHandler = () => {
    setIsDarkMode(prev => !prev);
  };

  const contextValue = {
    isDarkMode,
    changeThemeHandler,
  };

  return <ThemeContext.Provider value={contextValue}>{props.children}</ThemeContext.Provider>;
};

export default ThemeProvider;
