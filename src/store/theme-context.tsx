import React, { ReactNode, useState } from "react";
import Theme from "../models/theme";

type ThemeProps = {
  children: ReactNode;
};

export const ThemeContext = React.createContext<Theme>({
  isDarkMode: false,
  changeThemeHandler: () => {},
});

const ThemeProvider = ({ children }: ThemeProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const changeThemeHandler = () => {
    setIsDarkMode(prev => !prev);
  };

  const contextValue = {
    isDarkMode,
    changeThemeHandler,
  };

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
