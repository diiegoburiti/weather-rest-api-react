import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: monospace;
  background: linear-gradient(to bottom, #373b44, #4286f4);
  max-width: 100vw;
  max-height: 100vh;
  margin: 0 auto;
  height: 100%;

}

`;
