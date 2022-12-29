import { createGlobalStyle } from "styled-components";

interface GlobalStylesProps {
  isDarkModeActive: boolean;
}

const GlobalStyles = createGlobalStyle<GlobalStylesProps>`

:root {
  /* Colors */
  --dark-blue: hsl(209, 23%, 22%); /* Dark Mode Elements */
  --very-dark-blue: hsl(207, 26%, 17%); /* Dark Mode Background */
  --blackish-blue: hsl(200, 15%, 8%); /* Light Mode Text */
  --dark-gray: hsl(0, 0%, 52%); /* Light Mode Input */
  --very-light-gray: hsl(0, 0%, 98%); /* Light Mode Background */
  --white: hsl(0, 0%, 100%); /* Dark Mode Text & Light Mode Elements */

  /* Font Sizes */
  --homepage: 14px;
  --country: 16px;

  /* Breakpoint */
  --monitor: 1920px;
  --laptop: 1345px;
  --mobile: 600px;

  /* Measures */
  --homepage-padding: 0 5rem;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  width: 100%;
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-family: "Nunito Sans", sans-serif;
  background-color: ${props => (props.isDarkModeActive ? "var(--very-dark-blue)" : "var(--very-light-gray)")};
  color: ${props => (props.isDarkModeActive ? "var(--white)" : "var(--blackish-blue)")};

}

#root {
  width: 100%;
  height: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

h1 {
  font-size: 24px;
  font-weight: 800;
  line-height: 33px;
}

h2 {
  font-size: 18px;
  font-weight: 800;
  line-height: 26px;
}

`;

export default GlobalStyles;
