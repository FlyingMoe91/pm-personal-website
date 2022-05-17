import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
  box-sizing: border-box;
  font-family: 'Work Sans', sans-serif;
}

html {
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;

}

body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
`;
