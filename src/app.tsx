import React from "react";
import styled from "styled-components";
import {
  color,
  layout,
  flexbox,
  LayoutProps,
  FlexboxProps,
} from "styled-system";

import { ThemeWrapper } from "./components/ThemeWrapper";

const Title = styled.h1`
  ${color}
  font-size: 1.5em;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.blue};
`;

const Wrapper = styled.section<FlexboxProps & LayoutProps>`
  ${layout}
  ${flexbox}
  padding: 4em;
`;

const App = () => (
  <ThemeWrapper color={"green"}>
    <Wrapper justifyContent="center" alignContent="center">
      <Title color="blue">Testing styled components/ system</Title>
    </Wrapper>
  </ThemeWrapper>
);

export default App;
