import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

@media (max-width: 67.5em) {
  html {
    font-size: 93.75%;
  }
}

@media (max-width: 45em) {
  html {
    font-size: 87.5%;
  }
}

body,
html {
  scroll-behavior: smooth;
  --webkit-font: antialiased;
}

body {
  background:  ${({ theme }) => theme.colors.mainBackground};
  color:  ${({ theme }) => theme.colors.textDefault};
  font: 16px "Poppins", Arial, sans-serif;
}

body,
input,
button,
select,
textarea {
  font:400 1rem "Poppins", Arial, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 700;
}

button {
  cursor: pointer;
}
`