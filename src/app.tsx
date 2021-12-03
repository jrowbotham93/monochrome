import React from "react";
import styled, { ThemeProvider } from "styled-components";
import {
  color,
  layout,
  flexbox,
  LayoutProps,
  FlexboxProps,
} from "styled-system";

import theme from "./theme";

const Title = styled.h1`
  ${color}
  font-size: 1.5em;
  text-align: center;
`;

const Wrapper = styled.section<FlexboxProps & LayoutProps>`
  ${layout}
  ${flexbox}
  padding: 4em;
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <Wrapper justifyContent="center" alignContent="center">
      <Title color="blue">Testing styled components/ system</Title>
    </Wrapper>
  </ThemeProvider>
);

export default App;
