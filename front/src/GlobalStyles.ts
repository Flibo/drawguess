import { createGlobalStyle } from 'styled-components';

const mainColor = 239;
const secondaryColor = 288;

const GlobalStyles = createGlobalStyle`
  :root {
    --main-100: hsl(${mainColor}, 36%, 90%);
    --main-200: hsl(${mainColor}, 36%, 80%);
    --main-300: hsl(${mainColor}, 36%, 70%);
    --main-400: hsl(${mainColor}, 36%, 60%);
    --main-500: hsl(${mainColor}, 36%, 50%);
    --main-600: hsl(${mainColor}, 36%, 40%);
    --main-700: hsl(${mainColor}, 36%, 30%);
    --main-800: hsl(${mainColor}, 36%, 20%);
    --main-850: hsl(${mainColor}, 36%, 15%);
    --main-900: hsl(${mainColor}, 36%, 10%);
    --secondary-100: hsl(${secondaryColor}, 34%, 90%);
    --secondary-200: hsl(${secondaryColor}, 34%, 80%);
    --secondary-300: hsl(${secondaryColor}, 34%, 70%);
    --secondary-400: hsl(${secondaryColor}, 34%, 60%);
    --secondary-500: hsl(${secondaryColor}, 34%, 50%);
    --secondary-600: hsl(${secondaryColor}, 34%, 40%);
    --secondary-700: hsl(${secondaryColor}, 34%, 30%);
    --secondary-800: hsl(${secondaryColor}, 34%, 20%);
    --secondary-900: hsl(${secondaryColor}, 34%, 10%);
    --grey-hue: ${mainColor};
    --grey-100: hsl(var(--grey-hue), 5%, 90%);
    --grey-200: hsl(var(--grey-hue), 5%, 80%);
    --grey-300: hsl(var(--grey-hue), 5%, 70%);
    --grey-400: hsl(var(--grey-hue), 5%, 60%);
    --grey-500: hsl(var(--grey-hue), 5%, 50%);
    --grey-600: hsl(var(--grey-hue), 5%, 40%);
    --grey-700: hsl(var(--grey-hue), 5%, 30%);
    --grey-800: hsl(var(--grey-hue), 5%, 20%);
    --grey-900: hsl(var(--grey-hue), 5%, 10%);
    --white: hsl(var(--grey-hue), 5%, 90%);
  }

  html {
    background-color: var(--secondary-900);
    color: var(--white);
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  }

  body {
	padding: 0;
	margin: 0;
  }

  ul {
	  list-style: none;
  }

  ul, li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  a,
  a:link,
  a:visited,
  a:hover,
  a:active {
	  text-decoration: none;
    color: var(--main-500);
  }

  h1 {
	  margin-top: 0;
    margin-bottom: 36px;
    font-size: 40px;
  }

  input[type="text"] {
    border-radius: 8px;
    background-color: var(--main-200);
  }
`;

export default GlobalStyles;
